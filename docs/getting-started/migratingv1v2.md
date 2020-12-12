---
id: migratingv1v2
title: Migrating From Version 1.2.2 to Version 2.0.3
sidebar_label: Migrating from 1.2.2
---

This serves to document how users can migrate from **Monogame.Aseprite version 1.2.2** to **MonoGame.Aseprite verison 2.0.3**

## Overview
With the current version of **MonoGame.Aseprite** there has been a fundimental change to the import process that is not compatible with the previous version.  In verison **1.2.2**, users were required to export their sprite sheet from Aseprite, producing seperate PNG and JSON files that would need to be imported in the MGCB Editor.  

With version **2.0.3**, this is no longer required or supported.  Instead, users can now import the Aseprite file directly in the MGCB Editor.  The new import process will read all of the data that was originally supplied from the JSON file directly from the Aseprite file itself.  A sprite sheet will also be generated during the import process, so there is no need to export to PNG first either. 

In the sections below, we'll go over the steps needed to take in order to migrate from verion 1.2.2. to version 2.0.x and retain as close to, if not the same, functionality that you had previously.

## 1) Update NuGet Package
Update the NuGet package from `version 1.2.2` to the newest stable version of MonoGame.Aseprite.  At the time of this writing that is `version 2.0.3`

## 2) Update MGCB Editor References
You will need to manually update the reference to **MonoGame.Aseprite.ContentPipeline.dll** in the MGCB Editor.  To do this:
* If using MonoGame 3.8, following the instructions in the [MonoGame 3.7 Installation](monogame37installation#adding-reference-in-mgcb-editor) document.
* If using MonoGame 3.8, following the instrutions int he [MonoGame 3.8 Installation](monogame38installation#adding-reference-in-mgcb-editor) document.

## 3) Change Imported Content
Previously, users had to import the PNG + JSON that was export from Aseprite. Now you just need to import the Aseprite file itself.  

So for each PNG + JSON file combination added as content in the MGCB Editor, remove them and replace them with the **\*.ase/\*.aseprite** file they were exported from initially.

For any custom export settings you used in Aseprite for **border padding**, **inner pading**, **spacing**, or **merging duplicate frames**, set these in the **Processing Properties** panel in the MGCB Editor per file being imported.  For more information on how to do this, see the [Importing Aseprite File](importing-aseprite-file#processor-parameters) document.

## 4) Update `using` Statements
Replace all instances if `using MonoGame.Aseprite` in your code documents to the following:

```csharp
using MonoGame.Aseprite.Documents;
using Monogame.Aseprite.Graphics;
```

## 5) Change `AnimationDefinition` to `AsepriteDocument`
Previously, the JSON file was imported and processed into an `AnimationDefintiion` object. With the new version, this has been replaced by the `AseprietDocument` object.  This is the object created from the `Content.Load` of the Aseprite file.  The following demonstrates what to replace the code with:

**Replace the following**
```csharp
AnimationDefinition definition = Content.Load<AnimationDefinition>("[contentfilepath]");
```

**With this**
```csharp
AsepriteDocument aseDoc = Content.Load<AsepriteDocument>("[contentfilepath]");
```

## 6) Remove All Texture2D Loading of Sprite Sheet.
Previously, users had to export the animation as a sprite sheet from Aseprite and add it to the MGCB Edtior to load it as content. Now that we are loading from an Aseprite file directly, a sprite sheet is generated for you and provided within the `AsepriteDocument.Texture` object property. The following demonstrates how to retreive the `Texture2D` now:

```csharp
//  First load the AsepriteDocument instance.
AsepriteDocument aseDoc = Content.Load<AsepriteDocment>("[contentfilepath]");

//  Then use the .Texture property to get the Texture2D
Texture2D tex2d = aseDoc.Texture;
```
## 7) Use New `AnimatedSprite` Constructor
If you were using the `AnimatedSprite` class previously, you'll now need to update your code to call the new `AnimatedSprite(AsepriteDocument)` constructor. The following demonstrtes an example of using the new constructor:

```csharp
//  Load the aseprite document
AsepriteDocument aseDoc = Content.Load<AsepriteDocument>("[contentfilepath"]);

//  Pass it to the constructor of the AnimatedSprite
AnimatedSprite sprite = new AnimatedSprite(aseDoc);
```

## 8) Change Calls to `AnimatedSprite.GetCurrentFrameSlice`
If you were using slice data, you will need to update your call from `AnimatedSprite.GetCurrentFrameSlice` to `AnimatedSprite.TryGetCurrentFrameSlice`.  The old method did not serve it's purpose well and would throw an exception if no slice existed with the given name.  The new method more clearly defines its purpose an follow suite with the **Try** method naming convention.  The signature of this new method is `bool TryGetCurrentFrameSlice(string sliceName, out Slicekey slicekey)`. If it returns `true`, then you can safely assume that the value of `slicekey` is valid and can be used. If no slice is found with the `sliceName` given, then a `false` value is returned instead. The following demonstrates an example of using this method

```csharp
if(sprite.TryGetCurrentFrameSlice("slice-name", out SliceKey sliceKey))
{
    //  Safe to assume sliceKey value is a valid instance here
}
```

## 9) Remove calls to `AnimatedSprite.GetSliceColor`
This method was removed in favor of using the new `AnimatedSprite.TryGetCurrentFrameSlice` method as mentioned above in section #8.  The color for each slice is also accessible through the `SliceKey.Color` property for each slicekey within the slice instance. The following demonstrates an example of how you can get the slice color now.

```csharp
if(sprite.TryGetCurrentFrameSlice("slice-name", out SliceKey sliceKey))
{
    //  Safe to assume sliceKey value is a valid instance here
    Color sliceColor = sliceKey.Color;
}
```

## Conclusion
In the above steps, we went over how to migrate and existing game project from using **MonoGame.Aseprite 1.2.2** to **MonoGame.Aseprite 2.0.3**.  