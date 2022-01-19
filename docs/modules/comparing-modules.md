---
sidebar_position: 1
---

# Comparing Modules

The following is a list of current and planned modules in varying states.

Basic Engine Feature Comparisons
--------------------------------

| - | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/bgfx_img.png)bgfx | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/irrlicht_logo.png)Irrlicht | Nano VG | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/olc_pge_boxed.png)OLC::PGE | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/raylib_logo.png)raylib | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png)SDL 1.2 | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png)SDL 2.x | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/1200px-SFML_Logo.svg.png)SFML |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Status with Engine** | Not yet supported |Not yet supported|Not yet supported|Alpha Phase |Alpha Phase|Not yet supported |Supported / default |Alpha Phase |
| **Library License?** |[BSD 2-clause](https://bkaradzic.github.io/bgfx/license.html) |[zlib/libpng](http://irrlicht.sourceforge.net/?page_id=294) |[zlib](https://github.com/memononen/nanovg/blob/master/LICENSE.txt) | [OLC 3](https://github.com/OneLoneCoder/olcPixelGameEngine/wiki/Licencing) | [zlib](https://github.com/raysan5/raylib/blob/master/LICENSE) |[GNU LGPL](http://libsdl.org/license.php) | [zlib](http://libsdl.org/license.php) |[zlib/png](https://www.sfml-dev.org/license.php) |
|**2D Supported?** |Yes |Yes|Yes|Yes|Yes|Yes, but sprite/image rotation disabled |Yes |Yes|
|**2D Geometry Rendering** | Fast |Fast|Fast + antialiased vector graphics | Fast | Fast + library based pipeline | Slow Software rendering |Points, Lines and Rectangles fast, but Circles pre-rendered and scaled Arcs made in real time Round rects made in real time | Fast |
|**2.5 Supported?**| Yes |Yes |Researching... |Yes |Yes|Not supported |Researching... |Researching...|
|**3D supported?** | Yes |Yes| No |"Pseudo3D Routines" |Yes |No |No|No|
|**Shader Support** |Supported |Supported |Researching... |Researching... |Supported |Not Supported |Not Supported | Supported |
|**Audio** |Requires another library |Researching... |Requires another library |Through Extensions |Fully supported |Fully supported through SDL_Mixer 1.2, also room for alternatives |Fully supported through SDL_Mixer 2.0, also room for alternatives |Fully supported |
|**Input** |Requires another library |GamePad<br />Keyboard<br />Mouse<br />Touch  |Requires another library |GamePad<br />Keyboard<br />Mouse<br />Touch  |GamePad (4 Controllers MAX) |Keyboard<br />Mouse | GamePad<br />Keyboard<br />Mouse<br />Touch | GamePad<br />Haptic Feedback<br />Keyboard<br />Mouse<br />Touch | GamePad (8 Controllers MAX)<br />Keyboard<br />Mouse |
|**Networking** |Requires another library |Researching... |Researching... | Researching... |Researching ... SDL_Net 1.2 Module if fits needs. | Researching... SDL_Net 2.0 Module if fits needs. |Researching... SFML Net Module if fits needs. | Researching... |

Platform Comparisons
--------------------

| - | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/bgfx_img.png)bgfx | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/irrlicht_logo.png)Irrlicht | NANO VG | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/olc_pge_boxed.png)OLC::PGE | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/raylib_logo.png)raylib | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png)SDL 1.2 | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png)SDL 2.x | ![](https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/1200px-SFML_Logo.svg.png)SFML |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|**Desktop Notes** |Ported for Windows, Mac, Linux & Free BSD |Ported for Windows, Mac & Linux |Ported for Windows, Mac & Linux|Ported for Windows & Linux with Mac support being improved. |Ported for Windows, Mac, Linux & FreeBSD|Ported for Windows, Mac, Linux & FreeBSD|Ported for Windows, Mac, Linux & FreeBSD |Ported for Windows, Mac & Linux |
|**Mobile Support?**** |Android & iOS |Android ( Community Posts - Through Gradle)<br /><br /> iOS (Researching) |Researching  |Researching|Android Support iOS ( Researching) |Researching | Android & iOS | Researching |
|**Console Support***** |PlayStation 4*** |Researching |Not officially supported |Not officially supported|Not officially supported|Not officially supported|Researching Nintendo Switch supported*** |Researching |

*Licensing row is based on current version of each library as of March 6, 2021. Please be sure to include these licenses within your games/programs and make sure they are up to date.

**Mobile support row is based on research on each library forums, wiki, discord, etc. We have yet to add any build scripts or testing on mobile exports.

***Console support row is based on research on each library forums, wiki, discord, etc. We have yet to add any build scripts or testing on mobile exports.

**Listed Consoles are based on Patreon and homepages of each library. We have yet to add any build scripts or testing on mobile exports.
