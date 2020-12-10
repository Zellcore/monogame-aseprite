---
id: animatedsprite_addslices_slice___
sidebar_label: AddSlices(Slice[])
hide_title: true
slug: animatedsprite_addslices_slice___
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddSlices(MonoGame.Aseprite.Graphics.Slice[]) Method
Given [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instances, add them to the colleciton of  
slices.  
```csharp
public void AddSlices(params MonoGame.Aseprite.Graphics.Slice[] slices);
```
#### Parameters
`slices` [Slice](slice 'MonoGame.Aseprite.Graphics.Slice')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instances to add.  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the slice collection already contains a slice with the same name  
or if any of the slices in the given collection have the same name  
