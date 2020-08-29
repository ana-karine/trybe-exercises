#!/bin/bash
# Shell Script que pede ao usuário um caminho de arquivo ou diretório e, 
# em seguida, imprime na tela se ele é um arquivo comum, um diretório, 
# ou outro tipo de arquivo. Depois, faz um comando de listagem no 
# arquivo/diretório usando a opção de listagem detalhada.

  echo "Digite o caminho de um arquivo ou diretório:"
  read CAMINHO
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