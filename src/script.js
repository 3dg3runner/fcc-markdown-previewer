// sample data

textData = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

marked.use({
  gfm: true,
  breaks: true
});

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: textData,
      preview: marked.parse(textData)
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      text: event.target.value,
      preview: marked.parse(event.target.value)
    });
    
    textData = event.target.value;
  }
  
  render() {
    let parsedHTML = marked.parse(this.state.preview);
    let parsedHost = document.createElement('h1');
    
    return (
      <div>
        <div id="editor-container">
          <div id="editor-header">
            <p>( <i class="fa fa-solid fa-pen"></i> ) Editor</p>
          </div>
          <div id="editor-text">
            <textarea id="editor" rows="15" value={this.state.text} onChange={this.handleChange} placeholder="Type some markdown text here!"></textarea>
          </div>
        </div>
        <div id="preview-container">
          <div id="preview-header">
            <p>( <i className="fa fa-solid fa-desktop"></i> ) Preview</p>
          </div>
          <div id="preview-text">
            <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.preview }}></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById("markdown-container"));
