package homework;

import java.util.List;

public interface MemberDao {
	Member get(String id);
	List<Member> getList();
	List<Member> getList(String query);
}
