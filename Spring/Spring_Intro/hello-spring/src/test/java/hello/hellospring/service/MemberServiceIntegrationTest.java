package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
class MemberServiceIntegrationTest {

//    MemberService memberService;
//    MemoryMemberRepository memberRepository;
    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;

//    @BeforeEach
//    public void beforeEach() {
//        memberRepository = new MemoryMemberRepository();
//        memberService = new MemberService(memberRepository);
//    }

//    @AfterEach
//    public void afterEach() {
//        memberRepository.clearStore();
//    }

    @Test
    void 회원가입() {
        //given (어떤 값이 주어짐)
        Member member = new Member();
        member.setName("hello");

        //when (이것을 실행했을 때)
        Long saveId = memberService.join(member);

        //then (결과가 이것이 나와야 함. 검증구간)
        Member findMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findMember.getName());
    }

    @Test
    public void 중복_회원_예외() {
        //given
        Member member1 = new Member();
        member1.setName("jihyon");

        Member member2 = new Member();
        member2.setName("jihyon");

        //when
        memberService.join(member1);
        //방법1) try-catch구문
//        try {
//            memberService.join(member2);
//            fail();
//        } catch (IllegalStateException e) {
//            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
//        }
        // 방법2)
//        assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");

    }

}