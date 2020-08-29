#!/bin/bash
# Shell Script que recebe um diretório como argumento (ou parâmetro). 
# - se o argumento não for um diretório, mostra a mensagem: 
# "O argumento _ não é um diretório!";
# - se o argumento for um diretório, conta os arquivos existentes e mostra
# a mensagem: "O _ tem _ arquivos." (os "_" devem ser substituídos por
# diretório e quantidade de arquivos existentes, respectivamente.

  DIRETORIO=$1    #corresponde ao primeiro argumento passado (1)
  if [ -d "$DIRETORIO" ]
    then
      FILES=`ls -a $DIRETORIO | wc -l`   #retorna a quatidade total de arquivos dentro do diretório
      echo "O $DIRETORIO tem $FILES arquivos."
  else
      echo "O argumento $DIRETORIO não é um diretório!"
  fi