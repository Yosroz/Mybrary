FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWithd: 100,
    imageResizeTargetheight: 150
})

FilePond.parse(document.body)