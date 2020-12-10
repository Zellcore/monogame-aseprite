---
id: animatedsprite_addslice_string__ienumerable_slicekey__
sidebar_label: AddSlice(string, IEnumerable<SliceKey>)
hide_title: true
slug: animatedsprite_addslice_string__ienumerable_slicekey__
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddSlice(string, System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.SliceKey&gt;) Method
Given the name and a collection of [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instances,  
creates a new [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instance and adds it to the  
collection of slices.  
```csharp
public void AddSlice(string name, System.Collections.Generic.IEnumerable<MonoGame.Aseprite.Graphics.SliceKey> keys);
```
#### Parameters
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the [Slice](slice 'MonoGame.Aseprite.Graphics.Slice').  
  
`keys` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The collection of [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instances that  
belong to the slice.  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the slice collection already contains a slice with the same name  
