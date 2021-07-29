<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RomboController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        if(isset($request->number)){
          $n=$request->number;
        } else {
          $n=10;
        }

        $matriz = [];
        $name='ANDRES';
        $nLen=strlen($name);
        $l="";
        $c=0;
        $d=0;
        $t=0;
        $i=round($n/2)-1;
        $il=$i;
        $ir=$i;

        for ($a=0; $a<$n; $a++) {
          for ($b=0; $b<$n; $b++) {
            if($t==$nLen){
              $t=0;
            }
            $l=$name[$t];

            if($a<$i){
              if ($a==$c and ($b>=$il and $b<=$ir)) {
                $matriz[$a][$b] = $l;
                $t++;
              } else {
                $matriz[$a][$b] = " ";
              }
            } else {
              if ($a==$c and ($b>=$il and $b<=$ir)) {
                $matriz[$a][$b] = $l;
                $t++;
              } else {
                $matriz[$a][$b] = " ";
              }
            }
          }

          $c++;
          if($d<$i){
            $il--;
            $ir++;
          } else {
            $il++;
            $ir--;
          }
          $d++;
        }

        return response()->json($matriz);
    }
}
