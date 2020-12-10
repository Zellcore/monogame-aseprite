---
id: animatedsprite_getslicecolor_string_
sidebar_label: GetSliceColor(string)
hide_title: true
slug: animatedsprite_getslicecolor_string_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.GetSliceColor(string) Method
Gets the defined color of the slice with the given name  
```csharp
public Color GetSliceColor(string sliceName);
```
#### Parameters
`sliceName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the slice  
  
#### Returns
[Microsoft.Xna.Framework.Color](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Color 'Microsoft.Xna.Framework.Color')  
The color of the slice  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if no [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instance exists with the name given  
in [sliceName](#monogame_aseprite_graphics_animatedsprite_getslicecolor_string__slicename 'MonoGame.Aseprite.Graphics.AnimatedSprite.GetSliceColor(string).sliceName')  
