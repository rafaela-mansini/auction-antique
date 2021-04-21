<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class Files extends Model
{
    private $file;
    private $nameGenerated;

    public function validate(UploadedFile $file){
        $this->file = $file;

        $isValidExtension = $this->isValidExtension() === false ? false : true;
        $isValidSize = $this->isValidSize();

        return ($isValidExtension && $isValidSize) ? true : false;
    }

    private function isValidSize(){
        return $this->file->getSize() < 800000;
    }

    private function isValidExtension(){
        $valid_extensions = [ 'jpg', 'png', 'gif' ];
        return array_search($this->file->extension(), $valid_extensions);
    }

    public function storeFile(String $folder){
        $this->createRandomName();
        $this->file->storeAs($folder, $this->nameGenerated);
    }

    public function getNameGenerated(){
        return $this->nameGenerated;
    }

    private function createRandomName(){
        $this->nameGenerated = uniqid(date('HisYmd')).'.'.$this->file->extension();
    }
}
