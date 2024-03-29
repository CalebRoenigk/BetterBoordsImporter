// Global Variable Storage
var sectionHandleDuration = 1; // In Seconds TODO: Set value from UI Panel Settings
var boordsImportFolderFilePath = "~/Documents/GitHub/BetterBoordsImporter/Holiday_Card___AI_isn_t_there/"; // TODO: Assign file path at script run from UI Panel Settings
var projectFps = 30; // TODO: Set value from UI Panel Settings

// TODO: Create Script UI Panel
// TODO: Consider function and features in Script UI Panel, does it need defaults storing? Does it need a progress bar (probs not)
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":8,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"BetterBoordsImporter","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"BetterBoardsImporter","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"ImportButton","text":"Import Folder","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"Selects the folder you downloaded from Boords.com"}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"ImportGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":8,"alignChildren":["center","fill"],"alignment":"fill"}},"item-4":{"id":4,"type":"EditText","parentId":3,"style":{"enabled":true,"varName":"ImportPath","creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"~/Desktop/Example","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"SettingsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Settings","preferredSize":[0,0],"margins":8,"orientation":"column","spacing":10,"alignChildren":["fill","center"],"alignment":"fill"}},"item-6":{"id":6,"type":"Group","parentId":5,"style":{"enabled":true,"varName":"FlagGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":8,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"Checkbox","parentId":6,"style":{"enabled":true,"varName":"ImportAudioFlag","text":"Import Audio","preferredSize":[0,0],"alignment":null,"helpTip":"Imports the Boords Audio"}},"item-8":{"id":8,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"RunGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":8,"alignChildren":["center","fill"],"alignment":"fill"}},"item-9":{"id":9,"type":"Button","parentId":8,"style":{"enabled":true,"varName":"GenerateAnimatic","text":"Generate Animatic","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"Runs the script"}},"item-10":{"id":10,"type":"Group","parentId":5,"style":{"enabled":true,"varName":"ValuesGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":8,"alignChildren":["center","fill"],"alignment":"fill"}},"item-11":{"id":11,"type":"EditText","parentId":12,"style":{"enabled":true,"varName":"FPSValue","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":true},"softWrap":false,"text":"30","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"The FPS of animatic"}},"item-12":{"id":12,"type":"Group","parentId":10,"style":{"enabled":true,"varName":"FPSGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":8,"alignChildren":["left","center"],"alignment":null}},"item-13":{"id":13,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"FPSLabel","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Project FPS","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":"HandleLabel","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Handle Duration (s)","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":10,"style":{"enabled":true,"varName":"HandleDurationGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"EditText","parentId":16,"style":{"enabled":true,"varName":"HandleDurationValue","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"center","preferredSize":[32,0],"alignment":null,"helpTip":null}}},"order":[0,3,4,1,5,10,12,13,11,16,15,18,6,7,8,9],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/

// BETTERBOORDSIMPORTER
// ====================
var BetterBoordsImporter = new Window("palette");
BetterBoordsImporter.text = "BetterBoardsImporter";
BetterBoordsImporter.orientation = "column";
BetterBoordsImporter.alignChildren = ["center","top"];
BetterBoordsImporter.spacing = 10;
BetterBoordsImporter.margins = 16;

// IMPORTGROUP
// ===========
var ImportGroup = BetterBoordsImporter.add("group", undefined, {name: "ImportGroup"});
ImportGroup.orientation = "row";
ImportGroup.alignChildren = ["center","fill"];
ImportGroup.spacing = 8;
ImportGroup.margins = 0;
ImportGroup.alignment = ["fill","top"];

var ImportPath = ImportGroup.add('edittext {properties: {name: "ImportPath", readonly: true}}');
ImportPath.text = "~/Desktop/Example";

var ImportButton = ImportGroup.add("button", undefined, undefined, {name: "ImportButton"});
ImportButton.helpTip = "Selects the folder you downloaded from Boords.com";
ImportButton.text = "Import Folder";

// SETTINGSPANEL
// =============
var SettingsPanel = BetterBoordsImporter.add("panel", undefined, undefined, {name: "SettingsPanel"});
SettingsPanel.text = "Settings";
SettingsPanel.orientation = "column";
SettingsPanel.alignChildren = ["fill","center"];
SettingsPanel.spacing = 10;
SettingsPanel.margins = 8;
SettingsPanel.alignment = ["fill","top"];

// VALUESGROUP
// ===========
var ValuesGroup = SettingsPanel.add("group", undefined, {name: "ValuesGroup"});
ValuesGroup.orientation = "row";
ValuesGroup.alignChildren = ["center","fill"];
ValuesGroup.spacing = 8;
ValuesGroup.margins = 0;
ValuesGroup.alignment = ["fill","center"];

// FPSGROUP
// ========
var FPSGroup = ValuesGroup.add("group", undefined, {name: "FPSGroup"});
FPSGroup.orientation = "row";
FPSGroup.alignChildren = ["left","center"];
FPSGroup.spacing = 8;
FPSGroup.margins = 0;

var FPSLabel = FPSGroup.add("statictext", undefined, undefined, {name: "FPSLabel"});
FPSLabel.text = "Project FPS";

var FPSValue = FPSGroup.add('edittext {justify: "center", properties: {name: "FPSValue", enterKeySignalsOnChange: true}}');
FPSValue.helpTip = "The FPS of animatic";
FPSValue.text = "30";

// HANDLEDURATIONGROUP
// ===================
var HandleDurationGroup = ValuesGroup.add("group", undefined, {name: "HandleDurationGroup"});
HandleDurationGroup.orientation = "row";
HandleDurationGroup.alignChildren = ["left","center"];
HandleDurationGroup.spacing = 10;
HandleDurationGroup.margins = 0;

var HandleLabel = HandleDurationGroup.add("statictext", undefined, undefined, {name: "HandleLabel"});
HandleLabel.text = "Handle Duration (s)";

var HandleDurationValue = HandleDurationGroup.add('edittext {justify: "center", properties: {name: "HandleDurationValue"}}');
HandleDurationValue.text = "1";
HandleDurationValue.preferredSize.width = 32;

// FLAGGROUP
// =========
var FlagGroup = SettingsPanel.add("group", undefined, {name: "FlagGroup"});
FlagGroup.orientation = "column";
FlagGroup.alignChildren = ["left","center"];
FlagGroup.spacing = 8;
FlagGroup.margins = 0;

var ImportAudioFlag = FlagGroup.add("checkbox", undefined, undefined, {name: "ImportAudioFlag"});
ImportAudioFlag.helpTip = "Imports the Boords Audio";
ImportAudioFlag.text = "Import Audio";

// RUNGROUP
// ========
var RunGroup = BetterBoordsImporter.add("group", undefined, {name: "RunGroup"});
RunGroup.orientation = "row";
RunGroup.alignChildren = ["center","fill"];
RunGroup.spacing = 8;
RunGroup.margins = 0;
RunGroup.alignment = ["fill","top"];

var GenerateAnimatic = RunGroup.add("button", undefined, undefined, {name: "GenerateAnimatic"});
GenerateAnimatic.helpTip = "Runs the script";
GenerateAnimatic.text = "Generate Animatic";

BetterBoordsImporter.show();

// !----- MAIN FUNCTIONS -----! //

// Read JSON from file
function readBoordsJSON(filePath) {
// Create a File object
    var file = File(filePath);
    if(file.exists) {
        file.open("r");
        var jsonData = file.read();
        file.close();
        return JSON.parse(jsonData);
    }
}

function main() {
    app.beginUndoGroup("Better Boords Importer");
    // Read the boords JSON
    var boordsJSON = readBoordsJSON(boordsImportFolderFilePath + "ae.json");
    
    // Create a new master composition that is the length of the boords JSON
    // Calculate the duration of the comp
    var compDuration = calculateCompDuration(boordsJSON);
    
    // Create the master comp
    var mainComp = createNewComposition(boordsJSON.name, 1920, 1080, compDuration, true);
    
    // Get data for each board into a more readable format
    createSections(mainComp, boordsJSON);
    
    // Move the main comp into the comps folder
    var compsFolder = findFolderByName("Comps", app.project.rootFolder);
    mainComp.parentFolder = compsFolder;
    
    app.endUndoGroup();
}

// Returns the comp duration in seconds given the data from Boords
function calculateCompDuration(boordsJSON) {
    var compDuration = 0;
    for(var i=0; i < boordsJSON.frames.length; i++) {
        compDuration += boordsJSON.frames[i].duration;
    }
    compDuration = compDuration/1000;
    
    return compDuration;
}

// Creates a new comp
function createNewComposition(name, width, height, duration, openInViewer) {
    var newComp = app.project.items.addComp(name, width, height, 1.0, duration, projectFps);
    
    if(openInViewer == true) {
        newComp.openInViewer();
    }
    
    return newComp;
}

// !----- BOORDS DATA OBJECTS -----! //
// Object constructor for a BoordsFrame
function BoordsFrame(startTime, duration, filePath, index, section) {
    this.startTime = startTime;
    this.duration = duration;
    this.filePath = filePath;
    this.index = index;
    this.section = section;
}

// Object constructor for a Section
function Section(name, startTime) {
    this.name = name;
    this.startTime = startTime;
    this.duration = 0;
    this.frames = [];
}

// !----- SECTIONS & MAIN COMP CODE -----! //
// Creates the sections and places them in the main comp
function createSections(mainComp, boordsJSON) {
    const boordsFrames = [];
    var sectionNames = [];
    const sections = [];
    var currentPlayhead = 0;
    // Create the frame data
    for(var i=0; i < boordsJSON.frames.length; i++) {
        var frameData = boordsJSON.frames[i];
        var frameRoundedDuration = roundToFractionalIncrement(frameData.duration/1000, (1/projectFps)); // This line rounds the duration of the frame to a number that fits nicely into the fps in AE, this prevents odd little black missing frames
        var frame = new BoordsFrame(currentPlayhead, frameRoundedDuration, frameData.file_name, i, frameData.direction);
        boordsFrames.push(frame);
        currentPlayhead += frameRoundedDuration;


        if(sectionNames.length == 0 || !arrayIncludes(sectionNames, frame.section)) {
            sectionNames.push(frame.section);
            sections.push(new Section(frame.section, frame.startTime));
        }
    }

    // Consolidate the section data
    for(var i=0; i < boordsFrames.length; i++) {
        var frame = boordsFrames[i];
        var sectionIndex = findObjectIndexWithPropValueInArray(sections, 'name', frame.section);
        if(sectionIndex != -1) {
            sections[sectionIndex].frames.push(frame);
        }
    }

    // Import the boords sound
    importSound(mainComp);

    // Iterate over each section
    for(var i=0; i < sections.length; i++) {
        // Create the section
        createSection(i, sections, mainComp);
    }
}

// Imports the sound file from boords
function importSound(mainComp) {
    // Import the boords sound
    var videoFile = new File(boordsImportFolderFilePath + "sound.mp4");
    var importOptions = new ImportOptions(videoFile);
    var importedVideo = app.project.importFile(importOptions);

    // Move the animatic sounds into the global sounds asset folder
    var globalAssetsFolder = findFolderByName("`Global Assets", app.project.rootFolder);
    var globalAudioFolder = findFolderByName("Audio", globalAssetsFolder);
    var globalSoundsFolder = findFolderByName("Sounds", globalAudioFolder);
    importedVideo.parentFolder = globalSoundsFolder;

    // Add the video to the composition
    var videoLayer = mainComp.layers.add(importedVideo);
}

// Creates a section
function createSection(i, sections, mainComp) {
    var section = sections[i];
    // Tally up the duration of the section
    for(var j=0; j < section.frames.length; j++) {
        var frame = section.frames[j];
        section.duration += frame.duration;
    }

    // Add double the handle duration to the section duration
    section.duration += sectionHandleDuration * 2;

    // Create folders for the section
    var sectionFolder = createSectionFolderStructure(section.name);

    // Create the composition for the section
    var sectionComp = createNewComposition(section.name, 1920, 1080, section.duration, false);
    // Move the comp into the section folder
    sectionComp.parentFolder = sectionFolder;

    // Set the start timecode of the section to be a negative value of the handle duration
    sectionComp.displayStartTime = -sectionHandleDuration;

    // Add a start marker
    var startMarker = new MarkerValue("Start");
    sectionComp.markerProperty.setValueAtTime(sectionHandleDuration, startMarker);

    // Add an end marker
    var endMarker = new MarkerValue("End");
    sectionComp.markerProperty.setValueAtTime(section.duration - sectionHandleDuration, endMarker);


    // Iterate over the boards in the section
    for(var j=0; j < section.frames.length; j++) {
        var frame = section.frames[j];

        // Store the board file path
        var boardFilePath = boordsImportFolderFilePath + frame.filePath;

        // Import the image
        var imageFile = new File(boardFilePath);
        var importOptions = new ImportOptions(imageFile);
        var importedImage = app.project.importFile(importOptions);

        // Insert the board into the section
        var boardLayer = sectionComp.layers.add(importedImage);

        // Trim the board to its proper duration
        var firstBoardStartOffset = 0;
        if(j == 0) {
            firstBoardStartOffset = -sectionHandleDuration;
        }
        var lastBoardEndOffset = 0;
        if(j == section.frames.length - 1) {
            lastBoardEndOffset = sectionHandleDuration;
        }

        var handleOffsetDuration = sectionHandleDuration;
        var boardStartPoint = (frame.startTime - section.startTime) + handleOffsetDuration;
        boardLayer.inPoint = boardStartPoint + firstBoardStartOffset;
        boardLayer.outPoint = boardStartPoint + frame.duration + lastBoardEndOffset;

        // Move the board image into its section image assets folder
        var sectionAssetsFolder = findFolderByName("Assets", sectionFolder);
        var sectionImagesFolder = findFolderByName("Images", sectionAssetsFolder);
        importedImage.parentFolder = sectionImagesFolder;
    }

    // Place the section into the master composition
    var sectionCompInMain = mainComp.layers.add(sectionComp);

    // Set the position, in-point, and out-point of the section in the main composition
    sectionCompInMain.startTime = section.startTime - sectionHandleDuration;
    sectionCompInMain.inPoint = section.startTime;
    sectionCompInMain.outPoint = section.startTime + (section.duration - (sectionHandleDuration * 2));
}

// Function to create a section folder structure
function createSectionFolderStructure(sectionName) {
    // Find the specified parent folder or create one if not found
    var compsFolder = findFolderByName("Comps", app.project.rootFolder) || app.project.rootFolder.items.addFolder("Comps");
    var parentFolder = findFolderByName("Sections", compsFolder) || compsFolder.items.addFolder("Sections");

    // Create subfolders inside the parent folder
    var sectionFolder = parentFolder.items.addFolder(sectionName);
    var assetsFolder = sectionFolder.items.addFolder("Assets");
    var audioFolder = assetsFolder.items.addFolder("Audio");
    var footageFolder = assetsFolder.items.addFolder("Footage");
    var imagesFolder = assetsFolder.items.addFolder("Images");
    var miscFolder = assetsFolder.items.addFolder("Misc");

    // Create Precomps folder
    var precompsFolder = sectionFolder.items.addFolder("Precomps");
    
    return sectionFolder;
}

// Function to find a folder by name
function findFolderByName(folderName, searchLevel) {
    for (var i = 1; i <= searchLevel.numItems; i++) {
        var item = searchLevel.item(i);
        if (item instanceof FolderItem) {
            if(item.name === folderName) {
                return item;
            } else {
                findFolderByName(folderName, item);
            }
        }
    }
    return null;
}

// !----- MISC FUNCTIONS -----! //
function roundToFractionalIncrement(value, increment) {
    // Calculate the rounded value to the nearest fractional increment
    var roundedValue = Math.round(value / increment) * increment;

    return roundedValue;
}

// Returns true if a passed array contains a value
function arrayIncludes(array, value) {
    for(var i=0; i < array.length; i++) {
        if(array[i] == value) {
            return true;
        }
    }
    return false;
}

// Finds an object's index within an array, returns -1 if no object is matched
function findObjectIndexWithPropValueInArray(array, key, value) {
    for (var i=0; i < array.length; i++) {
        var obj = array[i];
        if(obj[key] == value) {
            return i;
        }
    }

    return -1;
}

main();


// Import each board image as a layer
// Trim each layer based on its length in boards
// 



// !----- JSON2JS POLYFILL (READ ONLY DO NOT MODIFY) -----! //
//  json2.js
//  2023-05-10
//  Public Domain.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
//  NOT CONTROL.

//  This file creates a global JSON object containing two methods: stringify
//  and parse. This file provides the ES5 JSON capability to ES3 systems.
//  If a project might run on IE8 or earlier, then this file should be included.
//  This file does nothing on ES5 systems.

//      JSON.stringify(value, replacer, space)
//          value       any JavaScript value, usually an object or array.
//          replacer    an optional parameter that determines how object
//                      values are stringified for objects. It can be a
//                      function or an array of strings.
//          space       an optional parameter that specifies the indentation
//                      of nested structures. If it is omitted, the text will
//                      be packed without extra whitespace. If it is a number,
//                      it will specify the number of spaces to indent at each
//                      level. If it is a string (such as "\t" or "&nbsp;"),
//                      it contains the characters used to indent at each level.
//          This method produces a JSON text from a JavaScript value.
//          When an object value is found, if the object contains a toJSON
//          method, its toJSON method will be called and the result will be
//          stringified. A toJSON method does not serialize: it returns the
//          value represented by the name/value pair that should be serialized,
//          or undefined if nothing should be serialized. The toJSON method
//          will be passed the key associated with the value, and this will be
//          bound to the value.

//          For example, this would serialize Dates as ISO strings.

//              Date.prototype.toJSON = function (key) {
//                  function f(n) {
//                      // Format integers to have at least two digits.
//                      return (n < 10)
//                          ? "0" + n
//                          : n;
//                  }
//                  return this.getUTCFullYear()   + "-" +
//                       f(this.getUTCMonth() + 1) + "-" +
//                       f(this.getUTCDate())      + "T" +
//                       f(this.getUTCHours())     + ":" +
//                       f(this.getUTCMinutes())   + ":" +
//                       f(this.getUTCSeconds())   + "Z";
//              };

//          You can provide an optional replacer method. It will be passed the
//          key and value of each member, with this bound to the containing
//          object. The value that is returned from your method will be
//          serialized. If your method returns undefined, then the member will
//          be excluded from the serialization.

//          If the replacer parameter is an array of strings, then it will be
//          used to select the members to be serialized. It filters the results
//          such that only members with keys listed in the replacer array are
//          stringified.

//          Values that do not have JSON representations, such as undefined or
//          functions, will not be serialized. Such values in objects will be
//          dropped; in arrays they will be replaced with null. You can use
//          a replacer function to replace those with JSON values.

//          JSON.stringify(undefined) returns undefined.

//          The optional space parameter produces a stringification of the
//          value that is filled with line breaks and indentation to make it
//          easier to read.

//          If the space parameter is a non-empty string, then that string will
//          be used for indentation. If the space parameter is a number, then
//          the indentation will be that many spaces.

//          Example:

//          text = JSON.stringify(["e", {pluribus: "unum"}]);
//          // text is '["e",{"pluribus":"unum"}]'

//          text = JSON.stringify(["e", {pluribus: "unum"}], null, "\t");
//          // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

//          text = JSON.stringify([new Date()], function (key, value) {
//              return this[key] instanceof Date
//                  ? "Date(" + this[key] + ")"
//                  : value;
//          });
//          // text is '["Date(---current time---)"]'

//      JSON.parse(text, reviver)
//          This method parses a JSON text to produce an object or array.
//          It can throw a SyntaxError exception.

//          The optional reviver parameter is a function that can filter and
//          transform the results. It receives each of the keys and values,
//          and its return value is used instead of the original value.
//          If it returns what it received, then the structure is not modified.
//          If it returns undefined then the member is deleted.

//          Example:

//          // Parse the text. Values that look like ISO date strings will
//          // be converted to Date objects.

//          myData = JSON.parse(text, function (key, value) {
//              var a;
//              if (typeof value === "string") {
//                  a =
//   /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
//                  if (a) {
//                      return new Date(Date.UTC(
//                         +a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]
//                      ));
//                  }
//                  return value;
//              }
//          });

//          myData = JSON.parse(
//              "[\"Date(09/09/2001)\"]",
//              function (key, value) {
//                  var d;
//                  if (
//                      typeof value === "string"
//                      && value.slice(0, 5) === "Date("
//                      && value.slice(-1) === ")"
//                  ) {
//                      d = new Date(value.slice(5, -1));
//                      if (d) {
//                          return d;
//                      }
//                  }
//                  return value;
//              }
//          );

//  This is a reference implementation. You are free to copy, modify, or
//  redistribute.

/*jslint
    eval, for, this
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== "object") {
    JSON = {};
}

(function () {
    "use strict";

    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return (n < 10)
            ? "0" + n
            : n;
    }

    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== "function") {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? (
                    this.getUTCFullYear()
                    + "-"
                    + f(this.getUTCMonth() + 1)
                    + "-"
                    + f(this.getUTCDate())
                    + "T"
                    + f(this.getUTCHours())
                    + ":"
                    + f(this.getUTCMinutes())
                    + ":"
                    + f(this.getUTCSeconds())
                    + "Z"
                )
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap;
    var indent;
    var meta;
    var rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string)
            ? "\"" + string.replace(rx_escapable, function (a) {
            var c = meta[a];
            return typeof c === "string"
                ? c
                : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + "\""
            : "\"" + string + "\"";
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i;          // The loop counter.
        var k;          // The member key.
        var v;          // The member value.
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (
            value
            && typeof value === "object"
            && typeof value.toJSON === "function"
        ) {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
            case "string":
                return quote(value);

            case "number":

// JSON numbers must be finite. Encode non-finite numbers as null.

                return (isFinite(value))
                    ? String(value)
                    : "null";

            case "boolean":
            case "null":

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce "null". The case is included here in
// the remote chance that this gets fixed someday.

                return String(value);

// If the type is "object", we might be dealing with an object or an array or
// null.

            case "object":

// Due to a specification blunder in ECMAScript, typeof null is "object",
// so watch out for that case.

                if (!value) {
                    return "null";
                }

// Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

// Is the value an array?

                if (Object.prototype.toString.apply(value) === "[object Array]") {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null";
                    }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                    v = partial.length === 0
                        ? "[]"
                        : gap
                            ? (
                                "[\n"
                                + gap
                                + partial.join(",\n" + gap)
                                + "\n"
                                + mind
                                + "]"
                            )
                            : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v;
                }

// If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (
                                    (gap)
                                        ? ": "
                                        : ":"
                                ) + v);
                            }
                        }
                    }
                } else {

// Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (
                                    (gap)
                                        ? ": "
                                        : ":"
                                ) + v);
                            }
                        }
                    }
                }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

                v = partial.length === 0
                    ? "{}"
                    : gap
                        ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                        : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== "function") {
        meta = {    // table of character substitutions
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = "";
            indent = "";

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === "string") {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== "function" && (
                typeof replacer !== "object"
                || typeof replacer.length !== "number"
            )) {
                throw new Error("JSON.stringify");
            }

// Make a fake root object containing our value under the key of "".
// Return the result of stringifying the value.

            return str("", {"": value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return (
                        "\\u"
                        + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    );
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with "()" and "new"
// because they can cause invocation, and "=" because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
// replace all simple value tokens with "]" characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or "]" or
// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval("(" + text + ")");

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return (typeof reviver === "function")
                    ? walk({"": j}, "")
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError("JSON.parse");
        };
    }
}());

// !----- FINDINDEX POLYFILL (READ ONLY DO NOT MODIFY) -----! //
Array.prototype.findIndex = Array.prototype.findIndex || function(callback) {
    if (this === null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
    } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }
    var list = Object(this);
    // Makes sures is always has an positive integer as length.
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    for (var i = 0; i < length; i++) {
        if ( callback.call(thisArg, list[i], i, list) ) {
            return i;
        }
    }
    return -1;
};