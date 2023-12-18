<?php                                                                                                                                                                          
        $banners = glob('static/banners/*');                                                                                                                                   
                                                                                                                                                                     
        header(sprintf('Location: %s', $banners[array_rand($banners)]));
