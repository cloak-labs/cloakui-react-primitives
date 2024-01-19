import type { FC, ReactNode } from "react";
import React = require("react");
export type SyntaxHighlighterOptions = {
    language?: "abap" | "abnf" | "actionscript" | "ada" | "agda" | "al" | "antlr4" | "apacheconf" | "apex" | "apl" | "applescript" | "aql" | "arduino" | "arff" | "asciidoc" | "asm6502" | "asmatmel" | "aspnet" | "autohotkey" | "autoit" | "avisynth" | "avroIdl" | "bash" | "basic" | "batch" | "bbcode" | "bicep" | "birb" | "bison" | "bnf" | "brainfuck" | "brightscript" | "bro" | "bsl" | "c" | "cfscript" | "chaiscript" | "cil" | "clike" | "clojure" | "cmake" | "cobol" | "coffeescript" | "concurnas" | "coq" | "cpp" | "crystal" | "csharp" | "cshtml" | "csp" | "cssExtras" | "css" | "csv" | "cypher" | "d" | "dart" | "dataweave" | "dax" | "dhall" | "diff" | "django" | "dnsZoneFile" | "docker" | "dot" | "ebnf" | "editorconfig" | "eiffel" | "ejs" | "elixir" | "elm" | "erb" | "erlang" | "etlua" | "excelFormula" | "factor" | "falselang" | "firestoreSecurityRules" | "flow" | "fortran" | "fsharp" | "ftl" | "gap" | "gcode" | "gdscript" | "gedcom" | "gherkin" | "git" | "glsl" | "gml" | "gn" | "goModule" | "go" | "graphql" | "groovy" | "haml" | "handlebars" | "haskell" | "haxe" | "hcl" | "hlsl" | "hoon" | "hpkp" | "hsts" | "http" | "ichigojam" | "icon" | "icuMessageFormat" | "idris" | "iecst" | "ignore" | "inform7" | "ini" | "io" | "j" | "java" | "javadoc" | "javadoclike" | "javascript" | "javastacktrace" | "jexl" | "jolie" | "jq" | "jsExtras" | "jsTemplates" | "jsdoc" | "json" | "json5" | "jsonp" | "jsstacktrace" | "jsx" | "julia" | "keepalived" | "keyman" | "kotlin" | "kumir" | "kusto" | "latex" | "latte" | "less" | "lilypond" | "liquid" | "lisp" | "livescript" | "llvm" | "log" | "lolcode" | "lua" | "magma" | "makefile" | "markdown" | "markupTemplating" | "markup" | "matlab" | "maxscript" | "mel" | "mermaid" | "mizar" | "mongodb" | "monkey" | "moonscript" | "n1ql" | "n4js" | "nand2tetrisHdl" | "naniscript" | "nasm" | "neon" | "nevod" | "nginx" | "nim" | "nix" | "nsis" | "objectivec" | "ocaml" | "opencl" | "openqasm" | "oz" | "parigp" | "parser" | "pascal" | "pascaligo" | "pcaxis" | "peoplecode" | "perl" | "phpExtras" | "php" | "phpdoc" | "plsql" | "powerquery" | "powershell" | "processing" | "prolog" | "promql" | "properties" | "protobuf" | "psl" | "pug" | "puppet" | "pure" | "purebasic" | "purescript" | "python" | "q" | "qml" | "qore" | "qsharp" | "r" | "racket" | "reason" | "regex" | "rego" | "renpy" | "rest" | "rip" | "roboconf" | "robotframework" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shellSession" | "smali" | "smalltalk" | "smarty" | "sml" | "solidity" | "solutionFile" | "soy" | "sparql" | "splunkSpl" | "sqf" | "sql" | "squirrel" | "stan" | "stylus" | "swift" | "systemd" | "t4Cs" | "t4Templating" | "t4Vb" | "tap" | "tcl" | "textile" | "toml" | "tremor" | "tsx" | "tt2" | "turtle" | "twig" | "typescript" | "typoscript" | "unrealscript" | "uorazor" | "uri" | "v" | "vala" | "vbnet" | "velocity" | "verilog" | "vhdl" | "vim" | "visualBasic" | "warpscript" | "wasm" | "webIdl" | "wiki" | "wolfram" | "wren" | "xeora" | "xmlDoc" | "xojo" | "xquery" | "yaml" | "yang" | "zig";
    /**
     * Available Prism themes: coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight, prism, a11yDark, atomDark, base16AteliersulphurpoolLight, cb, coldarkCold, coldarkDark, coyWithoutShadows, darcula, dracula, duotoneDark, duotoneEarth, duotoneForest, duotoneLight, duotoneSea, duotoneSpace, ghcolors, gruvboxDark, gruvboxLight, holiTheme, hopscotch, lucario, materialDark, materialLight, materialOceanic, nightOwl, nord, oneDark, oneLight, pojoaque, shadesOfPurple, solarizedDarkAtom, synthwave84, vs, vscDarkPlus, xonokai
     * Import theme like so: `import { _THEME_NAME_ } from "react-syntax-highlighter/dist/cjs/styles/prism";`
     */
    style?: Record<string, any>;
    /**
     * prop that will be combined with the top level style on the pre tag, styles here will overwrite earlier styles.
     */
    customStyle?: Record<string, any>;
    /**
     * props that will be spread into the <code> tag that is the direct parent of the highlighted code elements. Useful for styling/assigning classNames.
     */
    codeTagProps?: Record<string, any>;
    /**
     * if this prop is passed in as false, react syntax highlighter will not add style objects to elements, and will instead append classNames. You can then style the code block by using one of the CSS files provided by highlight.js.
     */
    useInlineStyles?: boolean;
    /**
     * if this is enabled line numbers will be shown next to the code block.
     */
    showLineNumbers?: boolean;
    /**
     * if this is enabled in conjunction with showLineNumbers, line numbers will be rendered into each line, which allows line numbers to display properly when using renderers such as react-syntax-highlighter-virtualized-renderer. (This prop will have no effect if showLineNumbers is false.)
     */
    showInlineLineNumbers?: boolean;
    /**
     * if showLineNumbers is enabled the line numbering will start from here
     */
    startingLineNumber?: number;
    /**
     * the line numbers container default to appearing to the left with 10px of right padding. You can use this to override those styles.
     */
    lineNumberContainerStyle?: Record<string, any>;
    /**
     * inline style to be passed to the span wrapping each number. Can be either an object or a function that receives current line number as argument and returns style object.
     */
    lineNumberStyle?: Record<string, any>;
    /**
     * a boolean value that determines whether or not each line of code should be wrapped in a parent element. defaults to false, when false one can not take action on an element on the line level.
     */
    wrapLines?: boolean;
    /**
     * a boolean to specify whether to style the <code> block with `white-space: pre-wrap` or `white-space: pre`
     */
    wrapLongLines?: boolean;
    /**
     * props to be passed to the span wrapping each line if wrapLines is true. Can be either an object or a function that receives current line number as argument and returns props object.
     */
    lineProps?: Record<string, any> | ((lineNumber: number) => Record<string, any>);
    /**
     * an optional custom renderer for rendering lines of code.
     */
    renderer?: (options: Record<string, any>) => ReactNode;
    /**
     * the element or custom react component to use in place of the default pre tag, the outermost tag of the component (useful for custom renderer not targeting DOM).
     */
    PreTag?: string | React.ComponentType;
    /**
     * the element or custom react component to use in place of the default code tag, the second tag of the component tree (useful for custom renderer not targeting DOM).
     */
    CodeTag?: string | React.ComponentType;
};
export type TReactCodeBlockProps = SyntaxHighlighterOptions & {
    className?: string;
    children: string;
};
export declare const CodeBlock: FC<TReactCodeBlockProps>;
