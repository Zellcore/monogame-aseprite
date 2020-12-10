---
id: animatedsprite_addslice_string__slicekey___
sidebar_label: AddSlice(string, SliceKey[])
hide_title: true
slug: animatedsprite_addslice_string__slicekey___
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddSlice(string, MonoGame.Aseprite.Graphics.SliceKey[]) Method
Given the name and [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instances,  
creates a new [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instance and adds it to the  
collection of slices.  
```csharp
public void AddSlice(string name, params MonoGame.Aseprite.Graphics.SliceKey[] keys);
```
#### Parameters
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the [Slice](slice 'MonoGame.Aseprite.Graphics.Slice').  
  
`keys` [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instances that belong to the slice.  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the slice collection already contains a slice with the same name  
