---
id: asepritedocumenttypereader_read_contentreader__asepritedocument_
sidebar_label: Read(ContentReader, AsepriteDocument)
hide_title: true
slug: asepritedocumenttypereader_read_contentreader__asepritedocument_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.ContentReaders](monogame_aseprite_contentreaders 'MonoGame.Aseprite.ContentReaders').[AsepriteDocumentTypeReader](asepritedocumenttypereader 'MonoGame.Aseprite.ContentReaders.AsepriteDocumentTypeReader')
## AsepriteDocumentTypeReader.Read(ContentReader, MonoGame.Aseprite.Documents.AsepriteDocument) Method
Allows the ContentPipline to read a new [AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument').  
```csharp
protected override MonoGame.Aseprite.Documents.AsepriteDocument Read(ContentReader input, MonoGame.Aseprite.Documents.AsepriteDocument existingInstance);
```
#### Parameters
`input` [Microsoft.Xna.Framework.Content.ContentReader](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Content.ContentReader 'Microsoft.Xna.Framework.Content.ContentReader')  
The ContentReader instance provided by the ContentManager.  
  
`existingInstance` [AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument')  
An existing instnace of the content being read.  
  
#### Returns
[AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument')  
A new [AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument') instance.  
