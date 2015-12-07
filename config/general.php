<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
	'devMode' => true,
	'convertFilenamesToAscii' => true,
	'limitAutoSlugsToAscii' => true,
	'customAsciiCharMappings' => array(
		'а' => 'a', 
		'б' => 'b', 
		'в' => 'v', 
		'г' => 'g', 
		'д' => 'd', 
		'е' => 'e', 
		'ё' => 'yo', 
		'ж' => 'zh', 
		'з' => 'z', 
		'и' => 'i', 
		'й' => 'j', 
		'к' => 'k', 
		'л' => 'l', 
		'м' => 'm', 
		'н' => 'n', 
		'о' => 'o', 
		'п' => 'p', 
		'р' => 'r', 
		'с' => 's', 
		'т' => 't', 
		'у' => 'u', 
		'ф' => 'f', 
		'х' => 'h', 
		'ц' => 'c', 
		'ч' => 'ch', 
		'ш' => 'sh', 
		'щ' => 'sch', 
		'ъ' => '-', 
		'ы' => 'y', 
		'э' => 'е', 
		'ю' => 'yu', 
		'я' => 'ya', 
		' ' => '-',
		'.' => '-',
	)
);
