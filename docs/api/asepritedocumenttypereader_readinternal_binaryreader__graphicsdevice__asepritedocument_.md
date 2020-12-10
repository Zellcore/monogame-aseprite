---
id: asepritedocumenttypereader_readinternal_binaryreader__graphicsdevice__asepritedocument_
sidebar_label: ReadInternal(BinaryReader, GraphicsDevice, AsepriteDocument)
hide_title: true
slug: asepritedocumenttypereader_readinternal_binaryreader__graphicsdevice__asepritedocument_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.ContentReaders](monogame_aseprite_contentreaders 'MonoGame.Aseprite.ContentReaders').[AsepriteDocumentTypeReader](asepritedocumenttypereader 'MonoGame.Aseprite.ContentReaders.AsepriteDocumentTypeReader')
## AsepriteDocumentTypeReader.ReadInternal(System.IO.BinaryReader, GraphicsDevice, MonoGame.Aseprite.Documents.AsepriteDocument) Method
Reads the [AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument') from the base stream  
of the reader provided.  
```csharp
private MonoGame.Aseprite.Documents.AsepriteDocument ReadInternal(System.IO.BinaryReader input, GraphicsDevice device, MonoGame.Aseprite.Documents.AsepriteDocument existingInstance);
```
#### Parameters
`input` [System.IO.BinaryReader](https://docs.microsoft.com/en-us/dotnet/api/System.IO.BinaryReader 'System.IO.BinaryReader')  
A BinaryReader instance who's base stream contains the content of the  
[AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument') being read.  
  
`device` [Microsoft.Xna.Framework.Graphics.GraphicsDevice](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.GraphicsDevice 'Microsoft.Xna.Framework.Graphics.GraphicsDevice')  
  
`existingInstance` [AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument')  
An existing instnace of the content being read.  
  
#### Returns
[AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument')  
A new [AsepriteAnimationDocument](https://docs.microsoft.com/en-us/dotnet/api/AsepriteAnimationDocument 'AsepriteAnimationDocument') instance.  
