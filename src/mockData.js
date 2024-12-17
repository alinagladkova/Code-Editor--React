export const languages = ["javascript", "python", "go"];

export const snippets = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("John");\n`,

  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("John")\n`,
  go: `\nfunc main() {\n\thttp.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n\t\tfmt.Fprintf(w, "Welcome to the Go server!")\n\t})\nhttp.ListenAndServe(":8080", nil)}\n`,
};
