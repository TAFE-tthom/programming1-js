#!/bin/bash


REPORTDIR="$(pwd)/spellcheck-report"

mkdir -p $REPORTDIR

for wdir in `ls ../tasks`; do
  for tdir in `ls "../tasks/$wdir"`; do

    TASKNAME="$wdir-$tdir"
    BASEDIR="../tasks/$wdir/$tdir"
    PROBFILE="$BASEDIR/Problem.md"
    
    if test -d $BASEDIR; then
      if test -e $PROBFILE; then
        OUTPUTFILE="$REPORTDIR/$TASKNAME-spell_error.txt"
        echo "Checking issues with: $TASKNAME";
        cat $PROBFILE | aspell --lang=en_AU --mode=markdown -a 2> $OUTPUTFILE > /dev/null
        ERRLIST=$(cat $OUTPUTFILE | wc -l)
        if test $ERRLIST -gt 1; then 
          echo "Errors reported to $OUTPUTFILE"
        else
          echo "No errors reported"
        fi
      else
        echo "$PROBFILE is currently missing"
      fi
      echo ""
    fi
  done

done
