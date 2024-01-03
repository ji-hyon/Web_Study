package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    // /hello 경로로 들어왔을 때 호출되는 메서드
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "hello!");
        return "hello";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam(value = "name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template";
    }

    // 문자를 넘겨주는 방식
    @GetMapping("hello-string")
    @ResponseBody   // http에서 body에 return 부분을 직접 넣어주겠다는 의미
                    // 위와 다르게 데이터를 그대로 넘겨줌
    public String helloString(@RequestParam("name") String name){
        return "hello" + name;
    }

    // 객체를 넘겨주는 방식
    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name) {
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }

    static  class Hello {
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }




}
