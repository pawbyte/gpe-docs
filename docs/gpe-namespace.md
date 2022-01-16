---
sidebar_position: 8
---

# The GPE Namespace

![](https://docs.gamepencil.net/wp-content/uploads/sites/6/2021/03/image_2021-03-06_093032.png)

What is a namespace?
--------------------

Namespaces in languages like C++ allow you to group functions, objects and classes under a specific named umbrella. 

Most people familiar with C++ have used the Standard "std" namespace. I.E when one wants to use a string they use std::string instead of string to clarify the umbrella string is under.

Using gpe namespace in your projects
------------------------------------

After including "gpe/gpe.h" you will be able to make calls and include the gpe namespace within your code. **To access gpe's classes, objects and functions simple type "gpe::" and then your variable, code or class you wish to use.** With Game Pencil being open source, it is crucial to be careful that you don't delete or alter objects meant to be left alone or unchanged.

To explain how our variables, functions and classes are separated into the gpe namespace let's try an example:

```cpp
#include "gpe/gpe.h"
#include <string>
#include <iostream>

int main( int argc, char* args[] )
{
    //Initialize the settings
    gpe::init_settings(argc, args , "Test","test","game_errors.txt" );

    //Initialize the base objects of gpe
    if( gpe::init_core_engine(argc, args,"game_errors.txt" ) == false )
    {
        gpe::error_log->report("Unable to properly initialize gpe_core_engine!\n");
        return 0;
    }
    else
    {
        gpe::error_log("Program started succesfully");

    }

   gpe::quit_engine();
   gpe::quit_core_engin();

    return 1;
}
```

You should see"Program started successfully" in your game_errors.txt file if you included gpe correctly. 

What happens without the gpe namespace?
---------------------------------------

The following program "should not compile"

```cpp
#include "gpe/gpe.h"
#include <string>
#include <iostream>

int main( int argc, char* args[] )
{
    //Initialize the settings
    gpe::init_settings(argc, args , "Test","test","game_errors.txt" );

    //Initialize the base objects of gpe
    if( init_core_engine(argc, args,"game_errors.txt" ) == false )
    {
        error_log->report("Unable to properly initialize gpe_core_engine!\n");
        return 0;
    }
    else
    {
        error_log("Program started succesfully");

    }

   quit_engine();
   quit_core_engin();

    return 1;
}
```

In CodeBlocks, I'm met with these error codes:

![](https://docs.gamepencil.net/wp-content/uploads/sites/6/2021/03/image_2021-03-06_111945.png)

As you can see these functions are undeclared as they are only specified within the gpe namespace. This clears up your code from any potential redeclarations of the same functions.
