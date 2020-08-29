#!/bin/bash
# Shell Script que imprime as palavras 
# "shell", "script", "usando", "estrutura", "repetição", "for", "terminal" 
# na tela, uma palavra por linha.

  WORDS="shell script usando estrutura repetição for terminal"
  for WORD in $WORDS
    do
      echo $WORD
    done