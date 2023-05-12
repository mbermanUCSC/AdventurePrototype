A simple adventure game by Miles Berman based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: CityScene, SidewalkScene, AlleyScene, NoKeyPannelScene, KeyPannelScene
- **2+ scenes *not* based on `AdventureScene`**: Intro, Outro.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Added help text (activates when "H" key is pressed).
    - Enhancement 2: Added playSound method (plays a sound given a key)

Experience requirements:
- **4+ locations in the game world**: CityScene, SidewalkScene, AlleyScene, NoKeyPannelScene, KeyPannelScene
- **2+ interactive objects in most scenes**: key in the SideWalkScene, button in the PannelScene, trash cans in the AlleyScene, location movements
- **Many objects have `pointerover` messages**: Trash cans in AlleyScene, button in the Pannel scenes 
- **Many objects have `pointerdown` effects**: Trash cans in AlleyScene, button in the Pannel scenes 
- **Some objects are themselves animated**: Key, Pannel Button


Asset sources:
I began prototyping the background scene art for my adventure game with Open AI’s DALL-E (https://labs.openai.com).
I began to make some art modeled after the images it gave me, but found they lacked a lot of the artifacting the AI images did. I actually preferred the messy look, so I thought it would be cool to use it as a tool somehow. What I ended up doing was partially creating scenes, and had the AI fill in some of the blank space. I think this created a really cool effect for my game art, and wanted to credit the tool, along with providing some of the prompts I gave to help fill in the art. 
Prompts:
“8 bit city at night sidewalk with some stores and graffiti ”
“8 bit control panel with screen and key slot” 
“8-bit street at night. The lights are on and there are some ads in the distance”


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
