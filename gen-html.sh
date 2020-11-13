pandoc -r gfm --template=https://github.com/IHE/publications/raw/master/ihe_template.html --metadata title="HIE-Whitepaper" --metadata path-prefix="../../" -w html -o index.html README.md
