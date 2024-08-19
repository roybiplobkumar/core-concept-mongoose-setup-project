import { FilterQuery, Query } from 'mongoose';

export class QueryBuilder<T> {
  public query: Record<string, unknown>;
  public modelQuery: Query<T[], T>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.query = query;
    this.modelQuery = modelQuery;
  }

  search(searchableFields: string[]) {
    let searchTeam = "";
    if (this.query?.searchTeam) {
      searchTeam = this.query.searchTeam as string;
    }
    if (searchTeam) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTeam, $options: "i" },
            } as FilterQuery<T>)
        ),
      });
    }
    return this;
  }

  paginate() {
    const limit: number = Number(this.query.limit || 10);
    const page: number = Number(this.query.page || 1);
    const skip: number = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  sort() {
    let sortBy = "-releaseDate";
    if (this.query.sortBy) {
      sortBy = this.query.sortBy as string;
    }

    this.modelQuery = this.modelQuery.sort(sortBy);
    return this;
  }

  fields() {
    let fields = "";
    if (this.query.fields) {
      fields = (this.query.fields as string).split(",").join(" ");
    }
    if (fields) {
      this.modelQuery = this.modelQuery.select(fields);
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ["searchTeam", "page", "limit", "sortBy", "fields"];
    excludeFields.forEach((e) => delete queryObj[e]);
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }
}
