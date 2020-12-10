---
id: asepritedocumenttypereader_read_byte____graphicsdevice_
sidebar_label: Read(byte[], GraphicsDevice)
hide_title: true
slug: asepritedocumenttypereader_read_byte____graphicsdevice_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.ContentReaders](monogame_aseprite_contentreaders 'MonoGame.Aseprite.ContentReaders').[AsepriteDocumentTypeReader](asepritedocumenttypereader 'MonoGame.Aseprite.ContentReaders.AsepriteDocumentTypeReader')
## AsepriteDocumentTypeReader.Read(byte[], GraphicsDevice) Method
Given a valid byte[] that represents the contents of the aserptie file  
import from MonoGame.Aseprite.ContentPipeline, reads the content and  
returns a new [AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument') instance.  
```csharp
public MonoGame.Aseprite.Documents.AsepriteDocument Read(byte[] input, GraphicsDevice graphicsDevice);
```
#### Parameters
`input` [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The binary file contents of the aseprite file import created by  
the MonoGame.Aseprite.Contentpipline.  
  
`graphicsDevice` [Microsoft.Xna.Framework.Graphics.GraphicsDevice](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Xna.Framework.Graphics.GraphicsDevice 'Microsoft.Xna.Framework.Graphics.GraphicsDevice')  
The GraphicsDevice instance used for rendering.  
  
#### Returns
[AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument')  
A new [AsepriteDocument](asepritedocument 'MonoGame.Aseprite.Documents.AsepriteDocument') instance.  
