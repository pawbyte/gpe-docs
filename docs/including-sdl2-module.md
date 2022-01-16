# Getting Started

![libsdl2!](https://docs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png "SDL library")

Written for both 32-bit and 64-bit systems. Although we default to 32-bit for the editor, we plan to add 64-bit executables in the future
In order to successfully compile Game Pencil’s Editor you will need the following libraries:

- SDL2 - [Download library](https://www.libsdl.org/download-2.0.php) Game Pencil currently uses 2.0.18
- SDL2_image [Download library](https://www.libsdl.org/projects/SDL_image/) - Search for development libraries and find your supported OS.
- SDL2_mixer [Download library](https://www.libsdl.org/projects/SDL_mixer/) - Search for development libraries and find your supported OS.
- SDL2_ttf [Download library](https://www.libsdl.org/projects/SDL_ttf/) - Search for development libraries and find your supported OS.

## Linkers needed for your compiler

### Linked libraries( For Windows)

> -lmingw32 -lSDL2main -lSDL2 -lSDL2_image -lSDL2_mixer -lSDL2_ttf -lComdlg32

### Linked libraries( For OSX)

> -lSDL2main -lSDL2 -lSDL2_image -lSDL2_mixer -lSDL2_ttf

### Linked libraries( For Linux)

> -lSDL2main -lSDL2 -lSDL2_image -lSDL2_mixer -lSDL2_ttf

## Creating SDL Projects in C/C++

Our heroes at [lazyfoo](http://lazyfoo.net/tutorials/SDL/01_hello_SDL/index.php) has created a set of detailed tutorials for getting an SDL application working in a few popular C++ IDEs

## SDL 2 License

> SDL 2.0 and newer are available under the [zlib license](https://www.zlib.net/zlib_license.html)
> This software is provided 'as-is', without any express or implied
> warranty.  In no event will the authors be held liable for any damages
> arising from the use of this software.
> Permission is granted to anyone to use this software for any purpose,
> including commercial applications, and to alter it and redistribute it
> freely, subject to the following restrictions:
>
> 1. The origin of this software must not be misrepresented; you must not
>    claim that you wrote the original software. If you use this software
>    in a product, an acknowledgment in the product documentation would be
>    appreciated but is not required.
> 2. Altered source versions must be plainly marked as such, and must not be
>    misrepresented as being the original software.
> 3. This notice may not be removed or altered from any source distribution.
>
> SDL 1.2 and older are available under the [GNU LGPL license](http://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)
> License copied from [http://libsdl.org/license.php](http://libsdl.org/license.php)
