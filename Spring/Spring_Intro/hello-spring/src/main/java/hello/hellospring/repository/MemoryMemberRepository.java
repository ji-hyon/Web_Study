package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;

//@Repository
public class MemoryMemberRepository implements MemberRepository{

    private static Map<Long, Member> store = new HashMap<>();
    private static long sequence = 0L;

    @Override
    public Member save(Member member) {
        member.setId(++sequence);
        store.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Member> findByName(String name) {
        return store.values().stream()
            .filter(member -> member.getName().equals(name))
            .findAny();
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }

    // 각 테스트가 실행되고 끝날 때마다 저장소를 지우는 함수
    // 테스트케이스에서 위 함수들을 하나씩 실행하면 문제가 없지만, 한번에 모두 실행하면 findByName에서 에러 발생
    // 다른 테스트 케이스에서 실행한 데이터가 남아서 문제가 되는 것
    // 순서와 상관이 없도록, 다른 테스트에 영향을 안받도록 테스트 후 store비우기
    public void clearStore() {
        store.clear();
    }
}
