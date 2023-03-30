# Building on Windows

---

Title: Building Game Pencil for Windows
Step Two: Installing dependencies.

---

_Supported Versions: Windows 7 and above_

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

---

# Guide for CodeBlocks Setup on Windows

- Download the Source code from [GamePencil's Engine Editor GitHub](https://github.com/pawbyte/Game-Pencil-Engine-Editor) and Extract it.

> You will find a Folder titled **Game-Pencil-Engine-Editor-master**

- Open the file titled _Game_Pencil_Engine_IDE.cbp_ using CodeBlocks.
- 
![1](https://user-images.githubusercontent.com/119344859/228913426-bb305d96-4492-4897-b5de-0bc3e602ed00.png)


- Choose a compiler of your choice. The steps below works the same for 64-bit compiler as for the 32-bit build. **REMEMBER: For building, using 64-bit Compiler, you need the SDL2 x86_64-w64-mingw32(64-bit) and i686-w64-mingw32 for 32-bit** 

![2](https://user-images.githubusercontent.com/119344859/228913679-030b1571-c1a8-429c-a3a4-45c31ff8bd55.png)


- Right Click on the Project and Hit build._You will probably get a bunch of Errors_.This is because the project and compiler has no idea of where to find the include and lib files required for your project.

![3](https://user-images.githubusercontent.com/119344859/228913740-996d3213-6fe5-4300-8207-91d3118a5224.png)


- In order to tell the compiler where to find those. We must set the correct path to them. Right click on the project and click on Build options. Go to the Search Directories tab and click on the add button at the bottom and choose wherever the include folder for SDL2 modules are present. If you are having SDL2 sub-modules in different directories add all of their include paths. Further more, we need to include the headers of GPE. Again click on the add button and this time add the path to _Game-Pencil-Engine-Editor-master\src_ folder.

![4](https://user-images.githubusercontent.com/119344859/228913786-dd325b41-7071-4bd8-9f60-721d193be5e8.png)


![5](https://user-images.githubusercontent.com/119344859/228913837-737add35-63b5-4860-989c-771464038f58.png)


- Now click on the Linker Sub-Tab and browse the lib folder(s) and add their paths similar to what we did for the include directories/folders.

- Next, Go to the Linker Settings tab and paste the below text in the Other Linker Options:-

```-lmingw32 -lSDL2main -lSDL2 -lSDL2_image -lSDL2_mixer -lSDL2_ttf -lComdlg32```


![6](https://user-images.githubusercontent.com/119344859/228913888-85ff6e60-b853-4f19-95ff-7ba7af8464a7.png)

The above step tells the compiler that which libs (libraries) need to be linked against GPE.

- Click OK

- Set the Build Targets to **Win32-Release** and Build the Project Again.

![7](https://user-images.githubusercontent.com/119344859/228913945-056f9260-da55-4f75-89a6-0f855cd405b8.png)


Hopefully, Your Build will be started and You'll observe creation of a bin folder in _Game-Pencil-Engine-Editor-master_ folder.
Since we selected Build Targets to **Win32-Release**, You will observe a Release Folder with in it with the **.exe** file.

Running it directly will throw a bunch of Errors as the program is depended on **DLL** files which has to be dynamically loaded at the runtime of application.

- So, copy all the SDL2 DLL files (with the extension _.dll_) to the Release Folder and finally, copy the _resources_ folder from _Game-Pencil-Engine-Editor-master_ to the Release Folder. All the Errors encountered can be found in th _game_errors.txt_.

![8](https://user-images.githubusercontent.com/119344859/228914048-40a66018-9089-43d5-a3e5-20b0a587f230.png)


If you've followed all the steps as mentioned you are probably good to go!

---

[![Raylib Logo](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/raylib_logo.png)](https://olddocs.gamepencil.net/including-raylib-module/)

### [Build via raylib modules](https://docs.gamepencil.net/modules/raylib)
