#!/bin/bash
# Shell Script que guarda o resultado do comando hostname na variável HOSTNAME. 
# Depois, imprime na tela a mensagem: "Este script está rodando no computador: _",
# em que "_" é o resultado do comando hostname que está na variável.

HOSTNAME=$(hostname)  
  echo "Este script está rodando no computador: $HOSTNAME"