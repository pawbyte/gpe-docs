---
title: The Editor
---

## The GUI

The editor is built on top of Game Pencil Engine and is named "[PAWGUI](https://docs.pawbyte.com/pawgui/)". It is meant to offer cross-platform near-native feel. Since it does not actually know about your operating system [themes](https://olddocs.gamepencil.net/themes), it is advised to either download or create a [theme](https://olddocs.gamepencil.net/themes) file similar to your operating system. By default, Game Pencil comes with a dozen themes, with dark being the default theme. In later versions themes will also store iconpack information for those wishing to toggle away from "[FontAwesome](https://fontawesome.com/)" buttons.


:::caution

**Limitations:**

-   At the moment the editor is for English based characters. Although our font-renderer does render unicode, we have not accurately measured wide-text in our current iteration of GUI elements designed for monospaced characters.
-   With the GUI not being entirely native or something like WxWidgets there may be areas where shortcuts do not mimic native-widgets.

:::

The editor embraces a fixed-grid of panels to become one dock. Below are all of the currently supported tabs within the dock and their purpose.

### Editor Panel

The Editor Panel consists of your primary menu for each resource as well as settings tabs.

In the Scene Editor when browsing through resources it may open individual branches into The Inspector Tab.

Modify resource names and various properties. Although with our dock system this is closable, it is not advised to hide as it is considered a primary panel.


### Grid Settings

The Grid Settings panel is located in the [Scene Editor](https://olddocs.gamepencil.net/scenes) and it is used to modify the grid used for branch placement.

The main properties are:

- `UseObjectGrid`: A togglable checkbox to enable placing new entities on the grid.
- `GridWidthField`: The width in pixels for each gridbox on the x-axis.
- `GridHeightField`: The height in pixels for each gridbox on the y-axis.
- `GridColorField`: A Colorbox to select which color of the grid you will like to view.
- `GridAlphaField`: A number between 0 and 255 for the grid's alpha value..
- `ForceSnap`: Select this button to snap all entities to the grid.


### Inspector

The Inspector Panel is a useful area for modifying branch data and properties.


### Main Panel

The main panel is where you can preview or toy around with your creations. From previewing particles, lighting and graphics. This area is where you can draw paths, design scenes and even write code.


### Meta

The Meta panel is so meta...

....................................................................

Sorry about that, dad jokes sometimes can infiltrate this manual from time to time.

The Meta panel contains useful metadata for each branch. This information can vary from being comments, timestamp data as well as data summations.


### Resources

The resources panel stores your open projects resources. It is currently organized into a folder-sorted list view. With each Branch Type and ending with a link to open project settings.


### Migration Guide from Past Engines

With Game Pencil being a C++ based engine it may be unlikely that it maybe your first game engine. Although not perfect, I've prepared a few small guides to explain some of the core differences between editors.

**Popular Game Engines to Game Pencil:**

-   [Game Maker Studio to Game Pencil](https://olddocs.gamepencil.net/game-maker-to-game-pencil/)
-   [Godot Engine to Game Pencil](https://olddocs.gamepencil.net/godot-to-game-pencil/)
-   [Unity to Game Pencil](https://olddocs.gamepencil.net/unity-to-game-pencil/)
