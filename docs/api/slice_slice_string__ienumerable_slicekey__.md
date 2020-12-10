---
id: slice_slice_string__ienumerable_slicekey__
sidebar_label: Slice(string, IEnumerable<SliceKey>)
hide_title: true
slug: slice_slice_string__ienumerable_slicekey__
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[Slice](slice 'MonoGame.Aseprite.Graphics.Slice')
## Slice(string, System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.SliceKey&gt;) Constructor
Creates a new [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instance.  
```csharp
public Slice(string name, System.Collections.Generic.IEnumerable<MonoGame.Aseprite.Graphics.SliceKey> keys);
```
#### Parameters
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the slice  
  
`keys` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
A collection of [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instances that describe the  
bounds of this slice per frame.  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if any of the [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') structures in the collection given contain,  
the same name  
