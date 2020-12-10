---
id: animatedsprite_addslice_string__color__dictionary_int_slicekey__
sidebar_label: AddSlice(string, Color, Dictionary<int,SliceKey>)
hide_title: true
slug: animatedsprite_addslice_string__color__dictionary_int_slicekey__
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddSlice(string, Color, System.Collections.Generic.Dictionary&lt;int,MonoGame.Aseprite.Graphics.SliceKey&gt;) Method
Given the name, color, and the key-value pair of [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey')  
instances, creates a new [Slice](slice 'MonoGame.Aseprite.Graphics.Slice') instance and adds it  
to the collection of slices.  
```csharp
public void AddSlice(string name, Color color, System.Collections.Generic.Dictionary<int,MonoGame.Aseprite.Graphics.SliceKey> keys);
```
#### Parameters
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the [Slice](slice 'MonoGame.Aseprite.Graphics.Slice').  
  
`color` [Microsoft.Xna.Framework.Color](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Color 'Microsoft.Xna.Framework.Color')  
The color of the [Slice](slice 'MonoGame.Aseprite.Graphics.Slice').  
  
`keys` [System.Collections.Generic.Dictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')  
The key-value pair collection of [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey') instances  
that belong to the slice.  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the slice collection already contains a slice with the same name  
