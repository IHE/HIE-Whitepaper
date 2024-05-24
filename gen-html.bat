pandoc -r gfm --template=https://github.com/IHE/publications/wiki/files/ihe_template.html --metadata title="HIE-Whitepaper" --metadata path-prefix="../../" -w html -o index.html README.md
