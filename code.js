// import icons from 'feather-icons';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
// figma.showUI(__html__);
// // Calls to "parent.postMessage" from within the HTML page will trigger this
// // callback. The callback will be passed the "pluginMessage" property of the
// // posted message.
// figma.ui.onmessage = msg => {
//   // One way of distinguishing between different types of messages sent from
//   // your HTML page is to use an object with a "type" property like this.
//   if (msg.type === 'create-rectangles') {
//     const nodes: SceneNode[] = [];
//     for (let i = 0; i < msg.count; i++) {
//       const rect = figma.createRectangle();
//       rect.x = i * 150;
//       rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
//       figma.currentPage.appendChild(rect);
//       nodes.push(rect);
//     }
//     figma.currentPage.selection = nodes;
//     figma.viewport.scrollAndZoomIntoView(nodes);
//   }
//   // Make sure to close the plugin when you're done. Otherwise the plugin will
//   // keep running, which shows the cancel button at the bottom of the screen.
//   figma.closePlugin();
// };
figma.showUI(__html__, { width: 300, height: 300 });
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    // listF.forEach(font => {
    //   // console.log(group.char);
    //   if(font.fontName == "Inter"){
    //     console.log(font.fontName);
    //     document.getElementById('emojis').innerHTML = document.getElementById('emojis').innerHTML + '<label class="tab-link" data-tab="' + group[0].char +'">' + group[0].char + '</label>';
    //     i ++ ;
    //   }
    // });
    // load font
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    // await figma.loadFontAsync(listF[1767].fontName)
    // const icon = figma.createNodeFromSvg(icons[message.type].toSvg())
    // icon.name = message.type
    // icon.x = figma.viewport.center.x
    // icon.y = figma.viewport.center.y
    // figma.currentPage.selection = [icon]
    if (msg.type === 'create-cover') {
        const nodes = [];
        // get the selected color for background
        const R = parseInt(msg.bgColor[0]) / 255;
        const G = parseInt(msg.bgColor[1]) / 255;
        const B = parseInt(msg.bgColor[2]) / 255;
        // create a new page
        const page1 = figma.createPage();
        page1.name = "Cover";
        page1.backgrounds = [{ type: 'SOLID', color: { r: R, g: G, b: B } }];
        // create frame and resize it
        const frame1 = figma.createFrame();
        frame1.resize(1152, 700);
        // corner radius and effects
        // frame1.cornerRadius = 20;
        // var offset: Vector;
        // frame1.effects = [{type: "DROP_SHADOW", color: {r: 0, g: 0, b: 0, a: 0.15}, blendMode: "NORMAL", offset: {x:0,y:2}, radius: 24, visible: true}]
        // set the frame background
        frame1.fills = [{ type: 'SOLID', color: { r: R, g: G, b: B } }];
        // const paint : SolidPaint[];
        const fill = [{
                type: 'SOLID',
                color: { r: 0, g: 0, b: 0 },
            }];
        // save data
        // page1.setPluginData("str", "string");
        //       console.log(page1.getPluginData("str"));
        // declare frame size
        const frameWidth = 1152;
        const frameHeight = 700;
        frame1.resize(frameWidth, frameHeight);
        // set frame size
        frame1.x = figma.viewport.center.x - frameWidth / 2;
        frame1.y = figma.viewport.center.y - frameHeight / 2;
        // add text to the frame
        const label = figma.createText();
        // text.insertCharacters(1,"Hello Cover","AFTER");
        label.textAutoResize = "WIDTH_AND_HEIGHT";
        frame1.appendChild(label);
        label.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
        label.characters = msg.message;
        label.x = 100;
        label.y = 50;
        label.resize(frameWidth - 200, frameHeight - 100);
        label.fontSize = 150;
        label.textAlignHorizontal = 'LEFT';
        label.textAlignVertical = 'CENTER';
        label.constraints = { horizontal: 'STRETCH', vertical: 'STRETCH' };
        // figma.currentPage.appendChild(frame1);
        // page1.appendChild(frame1);
        page1.insertChild(0, frame1);
        // nodes.push(frame1);
        // const pagenodes = figma.root.children;
        const pagenodes = figma.root.insertChild(0, page1);
        // console.log(pagenodes.length);
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
});
