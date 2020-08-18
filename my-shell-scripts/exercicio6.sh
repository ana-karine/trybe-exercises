#!/bin/bash

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