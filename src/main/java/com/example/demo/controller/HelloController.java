package com.example.demo.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by xmm on 2018/11/16.
 */
@Controller
@EnableAutoConfiguration
public class HelloController {
    @RequestMapping("/index")
    private String index(){
        return "/bigckbox.html";
    }
    @RequestMapping("/customerManager/dsfTestPurpose")
    private String dsfTestPurpose(){
        return "/customerManager/dsfTestPurpose.html";
    }
    @RequestMapping("/sampleInfoManager/sampleInfoQuery")
    private String sampleInfoQuery(){
        return "/sampleInfoManager/sampleInfoQuery.html";
    }
    @RequestMapping("/hello")
    private String hello(){
        return "/top-menu.html";
    }
    @RequestMapping("/ceshi")
    private String ceshi(){
        return "/decorators/index.html";
    }
}

