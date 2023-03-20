---
Title: Building Game Pencil for Windows
Step Two: Installing dependencies.
---

**Supported Versions: Windows 7 and above **

Game Pencil Engine is edited and modified via git( a powerful tool used for code versioning).

Our current preferred IDE for working on Game Pencil Engine is CodeBlocks. Please note, we will add a guide for other IDEs such as Visual Studio, Clion and Visual Studio Code.

You need to have the following tools downloaded and installed on your local device
* CodeBlocks [Download here](http://www.codeblocks.org/downloads/binaries/)
- Download the file codeblocks-20.03mingw-32bit-setup.exe	
  - We are defaulting to 32Bit version for backward capability and for weaker hardware devices.
-It is recommended to use [CodeBlocks](http://www.codeblocks.org/) to compile Game Pencil although other IDEs should compile the editor just as fine. We do provide our CodeBlocks project file alongside the source so one does not have to worry about makefiles and you see exactly what we see when we code updates for the editor.

* Git for Windows[Download here]()
"Backend module of choice" - currently defaulted to SDL2[Installation Guide]()

* C++ 11 or higher(We do not currently do C++17 based operations in Game Pencil in base or SDL2 module).





## Supported Backend Modules

[![SDL Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png)](https://olddocs.gamepencil.net/including-sdl2-modules/)

### [Build via SDL2 modules](https://olddocs.gamepencil.net/including-sdl2-modules/)

Our quickstart guide to including and building from the cross-platform king that is known as SDL2.

Github repository: [Download source from github](https://github.com/pawbyte/gpe-sdl2)

[![Raylib Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/raylib_logo.png)](https://olddocs.gamepencil.net/including-raylib-module/)

### [Build via raylib modules](https://olddocs.gamepencil.net/including-raylib-module/)

Coming soon, planned Q1 2022

Github repository: [Download source from github](https://github.com/pawbyte/gpe-raylib)

[![SFML Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SFML2.svg.png)](https://olddocs.gamepencil.net/including-sfml-module/)

### [Build via SFML modules](https://olddocs.gamepencil.net/including-sfml-module/)

Coming soon, planned Q2 2022

Github repository: [Download source from github](https://github.com/pawbyte/gpe-sfml)

[![Irrlicht Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/irrlicht_logo.png)](https://olddocs.gamepencil.net/including-irrlicht-module/)

### [Build via Irrlicht modules](https://olddocs.gamepencil.net/including-irrlicht-module/)

Coming soon, planned Q4 2022

[![OLC Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/olc_pge_logo.png)](https://olddocs.gamepencil.net/including-olc/)

### [Build via OLC:PixelGameEngine modules](https://olddocs.gamepencil.net/including-olc/)

Coming soon, planned Q4 2022


## Can I use C++17 or C++20 instead?
 Yes you can for your own local builds, but we do not currently have C++17 code in our repo. Certain modules such as raylib do utilize C++17, but for the main version of GPE we stick to C++11 for the time being.
