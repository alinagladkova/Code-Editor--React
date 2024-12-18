export const languages = ["javascript", "python", "java"];

export const langVersions = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
};

export const snippets = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Anna");\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("John")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
};
