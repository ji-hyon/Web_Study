package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

class MemoryMemberRepositoryTest {

    MemoryMemberRepository repository = new MemoryMemberRepository();

    // 각 테스트가 실행되고 끝날 때마다 저장소를 지우는 함수
    // 각 테스트는 서로 의존관계 없이 실행돼야 함
    @AfterEach
    public void afterEach() {
        repository.clearStore();
    }

    @Test
    public void save() {
        Member member = new Member();
        member.setName("jihyon");

        repository.save(member);

        Member result = repository.findById(member.getId()).get();

        // result와 member가 같은지 확인
        // 방법1 (org.junit.jupiter.api)
//        Assertions.assertEquals(result, member);
        // 방법2 (org.assertj.core.api)
//        Assertions.assertThat(member).isEqualTo(result);
        assertThat(member).isEqualTo(result);
    }

    @Test
    public void findByName() {
        Member member1 = new Member();
        member1.setName("jihyon1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("jihyon2");
        repository.save(member2);

        // 방법1
//        Optional<Member> result = repository.findByName("jihyon1");
        // 방법2
        Member result = repository.findByName("jihyon1").get();

        assertThat(result).isEqualTo(member1);

    }

    @Test
    public void findAll() {
        Member member1 = new Member();
        member1.setName("jihyon1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("jihyon2");
        repository.save(member2);

        List<Member> result = repository.findAll();

        assertThat(result.size()).isEqualTo(2);
    }

}
