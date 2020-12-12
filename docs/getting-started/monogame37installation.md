---
id: monogame37installation
title: Installation (MonoGame 3.7.1)
sidebar_label: Installation (MonoGame 3.7.1)
---

This serves to document how to download and add the **MonoGame.Aseprite** library to your project when using MonoGame 3.7.1 with .NET Framework >= 4.5.  

:::note

These steps are for MonoGame 3.7.1 using the .NET Framework >= 4.5.  If you are using MonoGame 3.8 with .NET Core, please refer to the installation steps found in the [Installation (MonoGame 3.8)](monogame38installation) document.

:::

## Prerequisites
* .NET Framework >= 4.5
* [MonoGame 3.7.1](https://www.monogame.net/downloads/)
* [A MonoGame project](https://docs.monogame.net/articles/getting_started/2_creating_a_new_project_vs.html)



## Downloading
**Monogame.Aseprite** is distributed via a NuGet package.  You can add the NuGet package to your project from within your IDE, such as the NuGet Package Manger in Visual Studio.  Just search for [MonoGame.Aseprite](https://www.nuget.org/packages/MonoGame.Aseprite/)

Or if you prefer to add it using a command line interface

**Package Manager CLI**  
```Install-Package MonoGame.Aseprite -Version 2.0.3.3```

Installing the package does two things.

1. First, it downloads `MonoGame.Aseprite.dll` and `MonoGame.Aseprite.ContentPipeline.dll`.  
2. Second, it automatically adds a reference in your project for `MonoGame.Aseprite`.

After installing the NuGet package, we need to add the reference in the MGCB Editor manually.

## Adding Reference in MGCB Editor
When the NuGet package is installed, it includes the `MonoGame.Aseprite.ContentPipeline.dll` file. This will be placed in a directory called **packages** at the root of your project directory.

```
- project root directory
  - packages
    - MonoGame.Aseprite.[version]
      - contentFiles
        - net45
          -> MonoGame.Aseprite.ContentPipeline.dll
```

To add the `MonoGame.Aseprite.ContentPipeline.dll` as a reference to the MGCB Editor, you can do this either using the MBCB Editor itself or by editing the Content.mbcb file directly.  Both ways are provided below.

### MBCB Editor
To add the refernce using the MBCB Editor:

1. Open your projects `Content.mgcb` file using the **MBCB Editor**
2. Click on the **Content** node in the **Project** panel
3. Scroll down in the **Properties** panel and click to edit the **References** field
4. In the **Reference Editor** window that opens, click the **Add** button
5. Navigate to the location of the `MonoGame.Aseprite.ContentPipeline.dll` file as mentioned above and select it to add it.

### Editing Content File Directly
To add the reference by editing the content file directly:

1. Open your projects `Content.mbcb` file in a text editor
2. Locate the `References` section and edit it to include the path to the `MonoGame.Aseprite.ContentPipeline.dll` file as shown below

```
#-------------------------------- References --------------------------------#

/reference:C:\Users\[User]\.nuget\packages\monogame.aseprite\[Version]\contentFiles\netstandard2.0
```

## Conclusion
That's it, if you completed the above steps, you're good to go. Next step would be read about [importing an aseprite file using the MGCB Editor](importing-aseprite-file).
