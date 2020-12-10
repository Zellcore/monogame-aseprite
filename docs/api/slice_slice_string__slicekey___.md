---
id: slice_slice_string__slicekey___
sidebar_label: Slice(string, SliceKey[])
hide_title: true
slug: slice_slice_string__slicekey___
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[Slice](slice 'MonoGame.Aseprite.Graphics.Slice')
## Slice(string, MonoGame.Aseprite.Graphics.SliceKey[]) Constructor
Creates a new [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instance.  
```csharp
public Slice(string name, params MonoGame.Aseprite.Graphics.SliceKey[] keys);
```
#### Parameters
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the slice  
  
`keys` [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instances that describe the  
bounds of this slice per frame.  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the frame for any of the [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instance given has already  
been added to this slice.  
