---
id: using-in-game
title: Using in Game.
sidebar_label: Using in Game
---

This serves to document how to use the imported Asprite file in your game.

# Loading Content
Once you've completed the steps to import the Aseprite file, you can load it using the `ContentManager` like you would any other content.  The **type** that you are loading is called an `AsepriteDocument`.

First, ensure you add the following `using` statement at the top of your file

```csharp
using MonoGame.Aseprite.Documents
```

Next, use the `ContentManager` to load the content

```csharp
AsepriteDocument aseprite = Content.Load<AsepriteDocument>("[ContentPath]");
```

Where `[ContentPath]` is the path to the content file.  For instance, if you added the file `player_animations.aseprite` in the MBCB Editor, then the `[ContentPath]` would be `player_animations`

Once loaded in, the `AsepriteDocument` object contains the generated sprite sheet `Texture2D` and various other properties about the Asprite file that you can use to create aniamted sprites for your game.  

Below is a quick overview of the `AsepriteDocument` class as well as the other class types that it stores values of.  If you would like a more indepth look at these types, you can view them in the [API documentation](/api/index)

## AspriteDocument Properties
The following tables shows the properties of the `AsepriteDocument` object.  You can also view the indepth [API documentation here](/api/asepritedocument).

|Property|Type|Description|
|---|---|---|
| Texture | `Texture2D` | Gets the `Texture2D` containing the generated sprite sheet of all frames from the Aseprite file. |
| TextureWidth | `int` | Gets the width, in pixels, of the texture. |
| TextureHeight | `int` | Gets the height, in pixels, of the texture. |
| Frames | `List<AsepriteFrame>` | Gets the collection of frames. |
| Slices | `Dictionary<string, AsepriteSlice>` | Gets a key-value pair collection of all slices.  The dictionary key is the name of the slice as defined in the Aseprite file. |
| Tags | `Dictionary<string, AsepriteTag>` | Gets a key-value pair collection of all tags.  The dictionary key is the name of the tag as defined in the Aseprite file. |

In the below sections, we'll go over the `AsepriteFrame`, `AsepriteSlice`, `AsepriteSliceKey`, and `AsepriteTag` objects.

### AsepriteFrame
Each `AsepriteFrame` instance contains properties that define a single frame of animation in the spritesheet, including the bounds of the frame, and the duration the frame should be displayed.  The following table lists the properties.  You can also view the indepth [API documentation here](/api/asepriteframe).

|Property|Type|Description|
|---|---|---|
| X | `int` | Gets the top-left x-coordinate position of the frame within the sprite sheet texture. |
| Y | `int` | Gets the top-left y-coordinate position of the frame within the sprite sheet texture. |
| Width | `int` | Gets the width, in pixels, of the frame. |
| Height | `int` | Gets the height, in pixels, of the frame. |
| Duration | `float` | Gets the amount of time, in seconds, that the frame should be displayed in an animation. |


### AsepriteSlice
Each `AsepriteSlice` instance contains properties that define a slice and a colleciton of each `AsepriteSliceKey` that makes up the slice.  The following table lists the properties.  You can also view the indepth [API documentation here](/api/asepriteslice).

|Property|Type|Description|
|---|---|---
| Name | `string` | Gets the name of the slice as defined in the Aseprite file. |
| Color | `Color` | Gets the color of the slice as defined in the Aseprite file. |
| SliceKeys | `Dictionary<int, AsepriteSliceKey>` | Gets a key-value pair collection of all `AsepriteSliceKey` instances that make up this slice. The key in the dictionary is the index of the `AsepriteFrame` that that the key is valid starting on. |

#### AsepriteSliceKey
Each `AsepriteSliceKey` instance defines the bounds of a slice on a given frame. The following table lists the properties.  You can also view the indepth [API documentation here](/api/asepriteslicekey).

|Property|Type|Description|
|---|---|---|
| FrameIndex | `int` | Gets the index of the `AsepriteFrame` that this slice key is valid starting on. |
| X | `int` | Gets the top-left x-coordinate position of the slice key relative to the top-left of the frame. |
| Y | `int` | Gets the top-left y-coordinate position of the slice key relative to the top-left of teh frame. |
| Width | `int` | Gets the width, in pixels, of the slice key. |
| Height | `int` | Gets the height, in pixels, of the slice key. |
| HasNinePatch | `bool` | Gets a value indicating if this slce key has valid ninepatch property values. |
| CenterX | `int` | Gets the top-left x-coordinate position of the center ninepatch rect relative to the top-left of the slice key.  **This value is only valid when `HasNinePatch` is `true`.** |
| CenterY | `int` | Gets the top-left y-coordinate position of the center ninepatch rect relative to the top-left of the slice key.  **This value is only valid when `HasNinePatch` is `true`.** |
| CenterWidth | `int` | Gets the width, in pixels, of the center ninepatch rect.  **This value is only valid when `HasNinePatch` is `true`.** |
| CenterHeight | `int` | Gets the height, in pixels, of the center ninepatch rect.  **This value is only valid when `HasNinePatch` is `true`.** |
| HasPivot | `int` | Gets a value indicating if ths slice key has valid Pivot property values. |
| PivotX | `int` | Gets the x-coordiante origin point of the pivot relative to the slice key.  **This value is only valid when `HasPivot` is `true`.** |
| PivotY | `int` | Gets the y-coordinate origin point of the pivot relative to the slice key.  **This value is only valid when `HasPivot` is `true`.** |

### AsepriteTag
Each `AsepriteTag` instance provides the values of an animation tag including the name, starting and ending frames, the `AsepriteTagDirection` and the color of the tag.  The following table lists the properties.  You can also view the indepth [API documentation here](/api/asepritetag).

|Property|Type|Description|
|---|---|---
| Name | `string` | Gets the name of the tag as defined in Aseprite file. |
| From | `int` | Gets the index of the `AsepriteFrame` the tag starts on. |
| To | `int` | Gets the index of the `AsepriteFarme` the tag ends on. |
| Color | `Color` | Gets the color of the tag as defined in the Aseprite file. |
| Direction | `AsepriteTagDirection` | Gets the direction the of the tag as an `AsepriteTagDirection` enum. |
| | | `AsepriteTagDirection.Forward` means the tag should play in a foward direction from the starting frame to the ending frame. |
| | | `AsepriteTagDirection.Reverse` means the tag should play in a reverse direction from teh ending frame to the starting frame. |
| | | `AsepriteTagDirection.PingPong` means the tag should play first in a forward direction from the stating to the ending frame, then in a reverse direction from the ending frame to the starting frame. |

## Conclusion
When importing the Aseprite file into your game though the content pipeline, you are provided an `AsepriteDocument` object with all the information needed from the Aseprite file to create your sprite animations.  

**Monogame.Aseprite** does provide an out-of-box class called `AnimatedSprite` that takes advantage of the `AsepriteDocument` object to create the aniamted sprites for you if you don't want to roll your own solution.  In the next document, we'll go over this aniamted sprite class and how you can use it in game if you like.
