pandoc -r gfm --template=ihe_template --metadata title="HIE-Whitepaper" --metadata path-prefix="../../" -w html -o index.html README.md
