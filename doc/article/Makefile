# set latexfile to the name of the main file without the .tex
TEXFILE=paper
TEX=pdflatex
BIBTEX=bibtex
BUILDTEX=$(TEX) $(TEXFILE).tex

all: pdf
	make clean

pdf:
	$(BUILDTEX)
	$(BIBTEX) $(TEXFILE)
	$(BUILDTEX)
	$(BUILDTEX)

clean-all:
	rm -f *.dvi *.log *.bak *.aux *.bbl *.blg *.idx *.ps *.eps *.pdf *.toc *.out *~

clean:
	rm -f *.log *.bak *.aux *.bbl *.blg *.idx *.toc *.out *~ *-converted-to.pdf