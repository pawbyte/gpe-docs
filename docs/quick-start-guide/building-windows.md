# Building on Windows

---

Title: Building Game Pencil for Windows
Step Two: Installing dependencies.

---

_Supported Versions: Windows 7 and above _

Game Pencil Engine is edited and modified via git( a powerful tool used for code versioning).

Our current preferred IDE for working on Game Pencil Engine is CodeBlocks. Please note, we will add a guide for other IDEs such as Visual Studio, Clion and Visual Studio Code.

You need to have the following tools downloaded and installed on your local device

- CodeBlocks [Download here](http://www.codeblocks.org/downloads/binaries/)

* Download the file codeblocks-20.03mingw-32bit-setup.exe
  - We are defaulting to 32Bit version for backward capability and for weaker hardware devices.
    -It is recommended to use [CodeBlocks](http://www.codeblocks.org/) to compile Game Pencil although other IDEs should compile the editor just as fine. We do provide our CodeBlocks project file alongside the source so one does not have to worry about makefiles and you see exactly what we see when we code updates for the editor.

- Git for Windows - [Download here](https://gitforwindows.org/)
  "Backend module of choice" - currently defaulted to SDL2 [Installation Guide](https://docs.gamepencil.net/docs/modules/SDL2)

- C++ 11 or higher(We do not currently do C++17 based operations in Game Pencil in base or SDL2 module).

## Supported Backend Modules

[![SDL Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png)](https://olddocs.gamepencil.net/including-sdl2-modules/)

### [Build via SDL2 modules](https://docs.gamepencil.net/modules/SDL2)

Our quickstart guide to including and building from the cross-platform king that is known as SDL2.

Github repository: [Download source from github](https://github.com/pawbyte/gpe-sdl2)

## Can I use C++17 or C++20 instead?

Yes you can for your own local builds, but we do not currently have C++17 code in our repo. Certain modules such as raylib do utilize C++17, but for the main version of GPE we stick to C++11 for the time being.

## Guide for CodeBlocks on Windows

-Download the Source code from [GamePencil's Engine Editor GitHub](https://github.com/pawbyte/Game-Pencil-Engine-Editor) and Extract it.
> You will see a Folder titled **Game-Pencil-Engine-Editor-master**

-Open the file titled _Game_Pencil_Engine_IDE.cbp_ using CodeBlocks.

- Choose a compiler of your choice. The steps below works the same for 64-bit compiler as for the 32-bit build.**REMEMBER: For building using 64-bit Compiler, you need the SDL2 x86_64-w64-mingw32(64-bit) and i686-w64-mingw32 for 32-bit**  

-Right Click on the Project and Hit build._You will get a bunch of Errors_.This is because the project and compiler has no knowledge of where to find the files.



[![Raylib Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/raylib_logo.png)](https://olddocs.gamepencil.net/including-raylib-module/)

### [Build via raylib modules](https://docs.gamepencil.net/modules/raylib)