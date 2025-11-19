---
title: "Integrating Generative Artificial Intelligence in Videogame Environments "
description: "How my second thesis took large language models, Unity, and a stubborn curiosity about AI-driven game worlds and turned them into a living sandbox of worlds and generative NPCs."
date: "2025-11-19"
tags:
  - Generative AI
  - Game Development
  - Unity
---

When I had the brilliant idea of doing a double degree, I did not fully register the small print: two degrees mean two final theses. The first one, on the videogame side, became the SODD Framework, a nice clean Unity package with ScriptableObjects, CI, documentation and an honours grade to round it off. The second, for the computer engineering degree, was never going to be that tidy. I wanted to experiment and get messy.

This project was my excuse to dive deep into a subject that has fascinated me since I closeley followed the emergence of OpenAI’s GPT-3: how generative AI can revolutionize the videogame industry. Not to replace artists or developers, but to provide levels of immersion and reactivity to the player’s actions that no other technology can achieve. Narratives that evolve through the interaction between the player, the environment, and the NPCs—and NPCs that react to both the player and their surroundings.

That is, I believe, the real potential of AI in games.

The guiding questions of this research were simple: Is the technology ready? How far can it go?

The short answer to the first is: yes. The second is far more complex. I was just one person, working within the limits of a school year. Despite that, the results I achieved are promising and point toward remarkable possibilities when scaled up with time and teams.

## Tech Stack

The technical demo I built was in Unity, creating a 2D top-down tilemap world similar to games like *Stardew Valley*.

For the AI integration I used OpenRouter, a unified API that allows seamless switching between models (OpenAI, Google, Anthropic, etc.), making it easy to experiment and compare reasoning and non-reasoning models in real time as well as evaluate pricing and performance.

## AI-Driven World Generation

One of the core pillars of the project was exploring the possibility of creating worlds through AI-driven procedural generation.

This idea was inspired by AI image generators: the user types in a prompt defining the properties of the image, and the AI generates the image. What if the same could be achieved with game worlds? A simple user prompt sparking the creation of a virtual world through AI.

This was easier said than done. After exploring different avenues within my time and resource constraints, I came up with a hybrid combination.

The base layer was a conventional Perlin-noise terrain generator. For each tile, it computed a noise value from 0 to 1 and mapped that to terrain types: deep water, shallow water, sand, grass, stone, snow. On top of that sat a vegetation layer: trees, pines, bushes, palms, rocks. This part was deterministic and controllable.

The twist was an AI-driven parameter generator. Instead of hardcoding that "grass lives between 0.4 and 0.6 and stones between 0.6 and 0.8", I handed a large language model a list of available tiles, a short description of what each represented, and the player's natural language description of the world they wanted. The model then output a JSON blob describing which tiles to use, which to exclude, and what height ranges and densities to assign to each.

When you ask for “grass plains; rocky, snowy mountains; and lakes and sea”, the model reasons its way to a banded world: deep water at the bottom, then water, then shallow water, sand beaches, mid-altitude grasslands, rocky slopes, and snow on the peaks. Forest tiles populate the grasslands, pines and rocks decorate the mountains, palm trees only appear along the sand. It even has the good sense to exclude cactus.

When you are deliberately vague and simply say “plains, tall mountains and lakes and seas”, it still infers something sensible: beaches on the coast, grass inland, rocky and snowy highlands. It does drop some specific elements, like apple trees and palms, unless you mention them explicitly. The lesson there is clear: the AI is helpful, but you still get better results when the human describes what they actually want.

More fun are the “counter-intuitive” worlds. One of the tests asked for islands with snowy coasts full of cactus, sandy deserts inland with pine and apple trees, and lakes at the highest altitudes. The model obliged, while politely noting the oddity. The generator happily produced snow-rimmed islands sporting cacti, deserts dotted with both pines and orchards, and lakes perched high in the terrain. Tradition says no; the player says yes; the AI shrugs and makes it work.

To make this usable by non-technical humans, I wrapped the whole thing in an AI assistant: a conversational world-generation wizard. It asks you about world size, probes for details when your description is too vague, explains what the underlying tool can and cannot do, warns you when you push beyond the recommended limits, and handles regeneration when you say “too much water, try again with more land”. When you are happy, it asks for a name and description, saves the world and tells you how to proceed.

This hybrid approach bridges classic procedural generation and generative AI reasoning, showing that developers and players can co-create worlds interactively through language.

Given more time, this approach could be applied to wave function collapse for AI-generated structured spaces such as dungeons and cities. A direction I could take for the future of this project.

## Generative NPCs and Cognitive Architecture

That required an AI brain architecture with several key components. At the base, the game world provides agents with a clear ontology: persons, objects, items, stats (health, nutrition, wakefulness), a global game clock, and a fairly rich command language. Commands like `inspect`, `scan`, `walk`, `follow`, `attack`, `heal`, `craft`, `give`, `take`, `equip`, `place` and others define everything an agent can actually do. Humans call these via keyboard and mouse; AI agents output them as text.

On top of that, each agent has its own internal structures: an event buffer where new perceptions arrive; a consciousness stream that tracks the recent flow of thoughts, dialogues and actions; a short-term memory that summarises this stream; and a long-term memory store containing older experiences and knowledge, indexed with embeddings for semantic search.

Functional modules orchestrate all of this. A Perception Unit turns raw game events into natural language “cognitive records”, decorating them with entity IDs, names and positions. A Memory Unit stores and retrieves memories, calculating relevance based on similarity, recency and importance. A Conversation Unit talks to the LLMs, enforcing a strict output schema with thoughts, dialogue, state and commands. A Cognitive Unit acts as the conductor: it pulls recent events, queries memory for relevant knowledge, asks the LLM what to think and do next, and executes the resulting sequence of commands in the world.

Crucially, each agent also has needs. Health can drop and kill them. Nutrition decays and drives them to seek food, with starvation eating away at health. Wakefulness falls as they stay awake, pushing them eventually to sleep. Sleep is not just a stat refill; it is also when the agent’s context is reset and their latest experiences are summarised into long-term memory. When they wake up, they re-read key memories and plan anew, like someone getting up and remembering “yesterday I built a chest near the river, I should go back there”.

The truly revolutionary part, however, is how NPCs are created. Instead of manually coding complex state machines or behaviour trees, each NPC is defined through a simple paragraph of natural language describing their personality and background. For example:

> *Pedro is an old, grumpy farmer who dislikes nonsense and prefers action over talk.*  
> *Chipi is an optimistic young woman who loves helping others and enjoys discovering new things.*  
> *Thalior is an ancient philosopher who speaks in riddles and reflects on existence.*

That single description is enough for the AI to shape their personalities and guide their behaviour. The infrastructure I built provides the perception, memory, and command systems needed for them to act independently within the world—observing, reasoning, deciding, and reacting to their surroundings and to the player.

## Emergent Stories and Social Situations

Once the system was functional, I let the NPCs loose. They all started in a new world with the same initial prompt in their heads: “You woke up in an unknown world.” The rest is up to them.

Given access to the same command set that the player has, they begin the way any sensible person would: inspecting themselves, scanning their surroundings, trying to understand where they are and what resources exist. They experiment with commands. They mis-use them. They receive error messages from the engine explaining the correct syntax. Many times, they learn from that and even teach other agents how to do things properly.

Over time, human patterns and social situations began to emerge.

Pedro, dropped into a cold desert world with snow and almost no fertile land, spent quite some time walking the entire map searching for "fertile ground for crops." When it became clear there was none, he resigned himself to a patch of snowy forest where bushes and trees grew, deciding that would have to do. Later, when his attempts to talk to Thalior resulted only in cryptic philosophical answers, he concluded he had "no time for this nonsense" and began avoiding him entirely. Every subsequent encounter followed the same rhythm: Thalior greeted him with deep reflections; Pedro walked away grumbling.

In another session, Chipi stumbled upon a chest Pedro had carefully crafted to store food and materials. As far as she knew, it was just a chest. She inspected it, opened it, happily took the contents and moved on. When Pedro returned and found the chest empty, he spotted her nearby and immediately confronted her. The confrontation escalated into combat. They traded blows until both were badly hurt. At that point, Chipi tried to de-escalate, offering him apples and peace. Pedro accused her of stealing his apples and demanded to know where she had found them. She lied, claiming she had picked them from nearby trees. He believed her story, accepted the apples and begrudgingly let her go. No script told them to role-play property rights, deception and negotiation; they arrived there through needs, perceptions, and a general understanding of how humans behave.

In yet another run, Chipi found a book placed by the player that encoded the knowledge of a new command: `heal`. By inspecting it, she "learned" the spell. Later, when she encountered the player with low health, she noticed their condition, healed them, and then taught them the healing command so they could "take care of themselves." Again, not a hardcoded quest—just an emergent consequence of her personality, knowledge and perception of someone in need.

Thalior, unsurprisingly, sometimes decided that survival was less interesting than contemplation. In one session he simply sat in the woods, thinking aloud about metaphysics while his hunger slowly rose. Only when his stats reached uncomfortably low levels did he go looking for Chipi and Pedro to "borrow" food.

Technically, all of this is “just” an LLM completing text based on prompts. Practically, you end up watching emerging interactions and situations that are completely unscripted; based on personalities, memory, needs, and perception. This is where the sheer potential of this approach becomes very hard to ignore.

## Results and Reflections

This thesis earned something more satisfying than a line in my CV. It earned a particular kind of reaction from the professors. They are used to seeing thousands of theses on topics they already know, re-implementations of well-trodden ideas, or literature reviews of areas thoroughly saturated with previous research. This one, as they kindly told me, “put itself in the mud”.

I jumped into a rapidly evolving field that the university’s official curriculum has not yet caught up with, built something new without being sure it would work, and then made it work well enough that one of the evaluators said, “this is one of those few theses where I actually learn something.” They even nominated it for honours. In the end it did not quite make it, so I narrowly missed the “double strike” of having both theses graduate with distinction, but I will happily take “almost” for a project of this complexity.

On a personal level, I confess I already knew the answers to the questions this project posed from the beginning. I’ve followed AI advances closely for years and had seen LLMs improve at context management, code, data, and roleplay. It was clear the planets were aligning. The question was how long it would take me to achieve it and how expensive it would be.

When I began the project in September 2024, I relied on API-based models. GPT-4o was around $15 per million tokens. A million tokens vanished in minutes with complex NPC context windows. Early reasoning models like OpenAI’s o1 were slow and cost $60 per million tokens. But then the field exploded. Reasoning models became widely available and far cheaper. OpenAI’s o4 dropped to about $4.40 per million tokens. Non-reasoning models like Gemini 2.0 reached roughly $0.40 per million tokens.

My NPC brains and terrain generator grew smarter every month, evolving alongside the industry itself.

The results I obtained within these constraints are enough to demonstrate the enormous potential of AI to transform videogames and the player experience.

I will eventually share more details and continue expanding the demo to explore further applications, when I heal from the PTSD the last two months of this project gave me.
