#!/bin/bash

  DIRETORIO=$1    #corresponde ao primeiro argumento passado (1)
  if [ -d "$DIRETORIO" ]
    then
      FILES=`ls -a $DIRETORIO | wc -l`   #retorna a quatidade total de arquivos dentro do diretório
      echo "O $DIRETORIO tem $FILES arquivos."
  else
      echo "O argumento $DIRETORIO não é um diretório!"
  fi