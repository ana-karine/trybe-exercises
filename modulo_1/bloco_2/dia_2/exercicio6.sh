#!/bin/bash
# Modifica o Shell Script do exercício anterior (exercicio5.sh) 
# de forma que ele aceite o nome do arquivo ou diretório como 
# argumento (ou parâmetro), ao invés de perguntar ao usuário. 

  CAMINHO=$1  #corresponde ao primeiro argumento passado (1)
  if [ -f "$CAMINHO" ]
    then
      echo "$CAMINHO é um arquivo comum"
  elif [ -d "$CAMINHO" ]
    then
      echo "$CAMINHO é um diretório"
  else
      echo "$CAMINHO é outro tipo de arquivo"
  fi
  ls -l $CAMINHO