<?php

$name='ANDRES';
$nLen=strlen($name);
$l="";
$t=0;
$n=10;
$i=round($n/2);
$il=$i;
$ir=$i;
$a=$n;
$b=$n;
$c=1;
$d=0;

for ($a=1; $a<=$n; $a++) {
  for ($b=1; $b<=$n; $b++) {
    if($t==$nLen){
      $t=0;
    }
    $l=$name[$t];

    if($a<=$i){
      if ($a==$c and ($b>=$il and $b<=$ir)) {
        echo " {$l} ";
        $t++;
      } else {
        echo "   ";
      }
    } else {
      if ($a==$c and ($b>=$il and $b<=$ir)) {
        echo " {$l} ";
        $t++;
      } else {
        echo "   ";
      }
    }
  }
  $c++;
  $d++;
  if($d<$i){
    $il--;
    $ir++;
  } else {
    $il++;
    $ir--;
  }
  echo "\n";
}
